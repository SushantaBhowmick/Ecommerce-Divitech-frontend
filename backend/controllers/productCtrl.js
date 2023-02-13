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
        //filtreing
        const queryObj = {...req.query};
        const excludeFields = ['page','sort','limit','fields'];
        excludeFields.forEach(el=>delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        let query = Product.find(JSON.parse(queryStr));

        //sorting
        if(req.query.sort){
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy)
        }else{
            query = query.sort("-createdAt")
        }

        //limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields)

        } else {
            query = query.select("-__v")
        }

        // pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page -1)*limit;
        query= query.skip(skip).limit(limit)
        if(req.query.page){
         const productCount = await Product.countDocuments();
         if(skip>= productCount) throw new Error("This page does not exits");
        }
        console.log(page,limit,skip);

        const product = await query;
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
