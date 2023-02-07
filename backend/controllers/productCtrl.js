const Product = require("../models/productModel");
const asyncHandler = require('express-async-handler');
const slugify = require("slugify");

exports.createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json({
            newProduct,
            messsage: "Product Created Successfully!"
        })
    } catch (error) {
        throw new Error(error)
    }
})

exports.getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)

    }
});

//Get all products
exports.getAllProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.find(req.query);
        res.json(product);
    } catch (error) {
        throw new Error(error)

    }
});

//updateProduct
exports.updateProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
       const update = await Product.findByIdAndUpdate(id,req.body,{
        new:true
       });
       res.json({
        messsage:"Product Updated Successfully!",
        update
       })
    } catch (error) {
        throw new Error(error)
    }
})

//delete Product
exports.deleteProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
       const product = await Product.findByIdAndDelete(id)
       res.json({
        messsage:"Product Deleted Successfully!",
        product,
       })
    } catch (error) {
        throw new Error(error)
    }
})
