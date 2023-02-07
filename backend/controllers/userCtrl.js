const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { validateMongoId } = require('../utils/validateMongodbId');
const { generateRefreshToken } = require('../config/refreshToken');
const jwt = require("jsonwebtoken");




//Register user
exports.createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    let findUser = await User.findOne({ email: email });

    if (!findUser) {
        //Create a new user 
        const newUser = await User.create(req.body);
        res.json(newUser)
    }
    else {
        throw new Error("User Already Exists")
    };
});

//login user 
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let findUser = await User.findOne({ email });

    if (findUser && await findUser.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(findUser?.id);
        const updateUser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken,
        }, {
            new: true
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

//handle refresh token

exports.handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No Refresh token present in db or not matched")
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token")
        }
        const accessToken = generateToken(user?._id);

        res.json({ accessToken });
    });
})

//LogOUt User
exports.logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true
        });
        return res.sendStatus(204);//forbidden

    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
    });
    res.sendStatus(204);//forbidden
})

//Get all User
exports.getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)

    } catch (error) {
        throw new Error(error)
    }
})

//GEt a single user 
exports.getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id);
    try {
        const user = await User.findById(id);
        res.json({
            success: true,
            user
        });
    } catch (error) {
        throw new Error(error);
    }
})


//Update user 
exports.updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoId(_id);
    try {
        const user = await User.findByIdAndUpdate(_id, {
            firstname: req?.body.firstname,
            lastname: req?.body.lastname,
            email: req?.body.email,
            mobile: req?.body.mobile,
        }, {
            new: true,
        });
        res.json({
            success: true,
            msg: "User Updated Susccessfully!",
            user
        });
    } catch (error) {
        throw new Error(error);
    }
})

//delete user 
exports.deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id);

    try {
        const user = await User.findById(id);
        await user.remove();
        res.json({
            success: true,
            msg: "User Deleted Susccessfully!"
        });
    } catch (error) {
        throw new Error(error);
    }
})

//block user
exports.blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id);

    try {
        const block = await User.findByIdAndUpdate(
            id, {
            isBlocked: true
        }, {
            new: true
        }
        );
        res.json({
            message: "User Blocked!"
        })
    } catch (error) {
        throw new Error(error)
    }
})

///Unblock User
exports.unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id);

    try {
        const unblock = await User.findByIdAndUpdate(
            id, {
            isBlocked: false
        }, {
            new: true
        }
        );
        res.json({
            message: "User Unblocked!"
        })
    } catch (error) {
        throw new Error(error)
    }
})

//1.51.19h