const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { validateMongoId } = require('../utils/validateMongodbId');
const { generateRefreshToken } = require('../config/refreshToken');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const { sendEmail } = require('./emailCtrl');




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

//updatePassword
 exports.updatePassword = asyncHandler(async(req,res)=>{
    const { _id } = req.user;
    const {password} = req.body;
   validateMongoId(_id)
    const user = await User.findById(_id);
    if(password){
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    }else{
        res.json(user)
    }
 })

 exports.forgotPasswordToken = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) throw new Error("User not found this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetUrl = `Hi, Please follow this link to reset Password. This link is valid till  10 minutes from now. <a href='http://localhost:5000/api/v1/reset-password/${token}'>Click here</a>`
        const data = {
            to:email,
            text:"Hey User",
            subject:"Forgot Password Link",
            htm: resetUrl
        }
        sendEmail(data);
        res.json(token)
    } catch (error) {
        throw new Error(error)
    }
 })

 exports.resetPassword = asyncHandler(async(req,res)=>{
    const { password } = req.body;
    const { token } = req.params;
    const hashToken = crypto.createHash('sha256').update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken:hashToken,
        passwordResetExpires:{$gt:Date.now()}
    });
    if(!user) throw new Error("Token Expired, please try again later")
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user)

 })