const Category = require("../models/blogCategoryModel");
const asyncHandler = require('express-async-handler');
const { validateMongoId } = require('../utils/validateMongodbId');

//create categories
exports.createCategory = asyncHandler(async(req,res)=>{
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error)
    }
})

//Get All Categories
exports.GetAllCategory = asyncHandler(async(req,res)=>{
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        throw new Error(error)
    }
})

//Get a Category
exports.GetACategory = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const categories = await Category.findById(id);
        res.json(categories);
    } catch (error) {
        throw new Error(error)
    }
})

//Update Categories
exports.updateCategory = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const updateCategory = await Category.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error)
    }
})

//Delete Categories
exports.deleteCategory = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json({
            status:true,
            message:"Category deleted successfully!",
            deleteCategory
        });
    } catch (error) {
        throw new Error(error)
    }
})
