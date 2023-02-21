const asyncHandler = require('express-async-handler');
const Coupon = require('../models/couponModel');
const { validateMongoId } = require('../utils/validateMongodbId');

//create coupon
exports.createCoupon = asyncHandler(async(req,res)=>{
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error)
    }
})

//get Coupon
exports.getAllCoupon = asyncHandler(async(req,res)=>{
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        throw new Error(error)
    }
})

//update Coupon
exports.updateCoupon = asyncHandler(async(req,res)=>{
    const {id} =req.params;
    validateMongoId(id)
    try {
        const updateCoupons = await Coupon.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.json({
            success:true,
            message:"Coupon Deleted Successfully!",
            updateCoupons
        });
    } catch (error) {
        throw new Error(error)
    }
})

//delete Coupon
exports.deleteCoupon = asyncHandler(async(req,res)=>{
    const {id} =req.params;
    console.log(id);
    validateMongoId(id)
    try {
        const deleteCoupons = await Coupon.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Coupon Deleted Successfully!",
            deleteCoupons
        });
    } catch (error) {
        throw new Error(error)
    }
})