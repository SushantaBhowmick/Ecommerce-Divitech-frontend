const Color = require("../models/colorModel");
const asyncHandler = require('express-async-handler');
const { validateMongoId } = require('../utils/validateMongodbId');

//create Color
exports.createColor = asyncHandler(async(req,res)=>{
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error)
    }
})

//Get All Color
exports.GetAllColor = asyncHandler(async(req,res)=>{
    try {
        const color = await Color.find();
        res.json(color);
    } catch (error) {

        throw new Error(error)
    }
})

//Get a Color
exports.GetAColor = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const color = await Color.findById(id);
        res.json(color);
    } catch (error) {
        throw new Error(error)
    }
})

//Update Color
exports.updateColor = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const updateColor = await Color.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateColor);
    } catch (error) {
        throw new Error(error)
    }
})

//Delete Color
exports.deleteColor = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const deleteColor = await Color.findByIdAndDelete(id);
        res.json({
            status:true,
            message:"Color deleted successfully!",
            deleteColor
        });
    } catch (error) {
        throw new Error(error)
    }
})
