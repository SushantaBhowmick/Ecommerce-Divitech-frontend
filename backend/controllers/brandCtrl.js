const Brand = require("../models/brandModel");
const asyncHandler = require('express-async-handler');
const { validateMongoId } = require('../utils/validateMongodbId');

//create brand
exports.createBrand = asyncHandler(async(req,res)=>{
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error)
    }
})

//Get All brand
exports.GetAllBrand = asyncHandler(async(req,res)=>{
    try {
        const brand = await Brand.find();
        res.json(brand);
    } catch (error) {
        throw new Error(error)
    }
})

//Get a Brand
exports.GetABrand = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const brand = await Brand.findById(id);
        res.json(brand);
    } catch (error) {
        throw new Error(error)
    }
})

//Update brand
exports.updateBrand = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const updateBrand = await Brand.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateBrand);
    } catch (error) {
        throw new Error(error)
    }
})

//Delete brand
exports.deleteBrand = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const deleteBrand = await Brand.findByIdAndDelete(id);
        res.json({
            status:true,
            message:"Brand deleted successfully!",
            deleteBrand
        });
    } catch (error) {
        throw new Error(error)
    }
})
