const User = require('../models/userModel');
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');
const Coupon = require('../models/couponModel');
const Order = require('../models/orderModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { validateMongoId } = require('../utils/validateMongodbId');
const { generateRefreshToken } = require('../config/refreshToken');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const { sendEmail } = require('./emailCtrl');
const uniqid = require('uniqid');




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

//Admin Login
//login user 
exports.loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let findAdmin = await User.findOne({ email });
    if (findAdmin.role !== 'admin') throw new Error("Not Authorized");

    if (findAdmin && await findAdmin.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(findAdmin?.id);
        const updateUser = await User.findByIdAndUpdate(findAdmin.id, {
            refreshToken: refreshToken,
        }, {
            new: true
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id)
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

//save user address
exports.saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoId(_id);
    try {
        const user = await User.findByIdAndUpdate(_id, {
            address: req?.body?.address,

        }, {
            new: true,
        });
        res.json({
            success: true,
            msg: "User adress save Susccessfully!",
            user
        });
    } catch (error) {
        throw new Error(error);
    }
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
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
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
exports.updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoId(_id)
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user)
    }
})

exports.forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetUrl = `Hi, Please follow this link to reset Password. This link is valid till  10 minutes from now. <a href='http://localhost:5000/api/v1/reset-password/${token}'>Click here</a>`
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetUrl
        }
        sendEmail(data);
        res.json(token)
    } catch (error) {
        throw new Error(error)
    }
})

exports.resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashToken = crypto.createHash('sha256').update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    if (!user) throw new Error("Token Expired, please try again later")
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user)

})

exports.getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate("wishlist");
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})


exports.userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    console.log(_id);
    validateMongoId(_id);
    try {
        let products = [];
        const user = await User.findById(_id);
        //check if user already have product in cart  
        const alreadyExitsCart = await Cart.findOne({ orderby: user._id });
        if (alreadyExitsCart) {
            alreadyExitsCart.remove()
        }
        for (let i = 0; i < cart.length; i++) {
            let obj = {};
            obj.product = cart[i]._id;
            obj.count = cart[i].count
            obj.color = cart[i].color
            let getPrice = await Product.findById(cart[i]._id).select("price").exec();
            obj.price = getPrice.price;
            products.push(obj)
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user?._id,
        }).save();
        res.json(newCart)
    } catch (error) {
        throw new Error(error)
    }
})

exports.getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoId(_id);
    try {
        const cart = await Cart.findOne({ orderby: _id }).populate(
            "products.product",
            // "_id title price totalAfterDiscount"
        );
        res.json(cart);
    } catch (error) {
        throw new Error(error)
    }
})

exports.emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoId(_id);
    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({ orderby: user._id })
        res.json(cart);
    } catch (error) {
        throw new Error(error)
    }
})

exports.applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongoId(_id);
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error("Invalid Coupon")
    }
    const user = await User.findOne({ _id })
    let { products, cartTotal } = await Cart.findOne({ orderby: user._id })
        .populate("products.product");
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100)
        .toFixed(2)
    await Cart.findOneAndUpdate({
        orderby: user._id
    }, {
        totalAfterDiscount
    },
        { new: true }
    );
    res.json(totalAfterDiscount)
})

exports.createOrder = asyncHandler(async(req,res)=>{
    const {COD, couponApplied} = req.body;
    const { _id } = req.user;
    validateMongoId(_id);

    try {
    if(!COD) throw new Error ("Create cash on order failed");
        const user = await User.findById(_id);
        let userCart= await Cart.findOne({orderby:user._id})
        let finalAmount = 0;
        if(couponApplied && userCart.totalAfterDiscount){
            finalAmount = userCart.totalAfterDiscount;
        }else{
            finalAmount = userCart.cartTotal;
        }

        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent:{
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status:"Cash on Delivery",
                created: Date.now(),
                currency:"usd"
            },
            orderby: user._id,
            orderStatus: "Cash on Delivery",
        }).save();
        let update = userCart.products.map((item)=>{
            return{
                updateOne:{
                    filter: {_id:item.product._id},
                    update: {$inc:{quantity: -item.count, sold: +item.count}}
                }
            }
        })
const updated = await Product.bulkWrite(update, {});
res.json({
    message:"success"
})
    } catch (error) {
        throw new Error(error)
    }
    
})

exports.getOrders = asyncHandler(async(req,res)=>{
    const { _id } = req.user;
    validateMongoId(_id);
    try {
        const userOrder = await Order.findOne({orderby: _id}).populate('products.product').exec();
        res.json(userOrder);
    } catch (error) {
        throw new Error(error)
    }
})

exports.updateOrderStatus = asyncHandler(async(req,res)=>{
    const {status} = req.body;
    const {id} = req.params;
   try {
    validateMongoId(id)
    const updateOrderStatus = await Order.findByIdAndUpdate(id,{
        orderStatus: status,
        paymentIntent:{
            status:status,
        }
    },{
        new:true,
    })
    res.json(updateOrderStatus)
   } catch (error) {
        throw new Error(error)
   }
})

//const getorder pending //8.36.05