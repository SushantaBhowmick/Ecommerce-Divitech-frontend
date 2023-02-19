const Product = require("../models/productModel");
const asyncHandler = require('express-async-handler');
const slugify = require("slugify");
const User = require('../models/userModel');

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
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        let query = Product.find(JSON.parse(queryStr));

        //sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy)
        } else {
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
        const skip = (page - 1) * limit;
        console.log(page, limit, skip);
        query = query.skip(skip).limit(limit)
        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error)

    }
});

//updateProduct
exports.updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const update = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json({
            messsage: "Product Updated Successfully!",
            update
        })
    } catch (error) {
        throw new Error(error)
    }
})

//delete Product
exports.deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id)
        res.json({
            messsage: "Product Deleted Successfully!",
            product,
        })
    } catch (error) {
        throw new Error(error)
    }
})


////Add to wishlist
exports.addToWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId)
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(_id, {
                $pull: { wishlist: prodId }
            }, {
                new: true
            })
            res.json(user)
        } else {
            let user = await User.findByIdAndUpdate(_id, {
                $push: { wishlist: prodId }
            }, {
                new: true
            })
            res.json(user)
        }
    } catch (error) {
        throw new Error(error)
    }
})

//total ratings
exports.rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find((userId => userId.postedby.toString() === _id.toString()))

        if (alreadyRated) {
            const updateRating = await product.updateOne({
                ratings:
                    {$elemMatch:alreadyRated},
            },{
                $set:{"ratings.$.star":star}
            },{
                new:true,
            });
            res.json(updateRating)

        } else {
            const rateProduct = await Product.findByIdAndUpdate(prodId, {
                $push: {
                    ratings: {
                        star: star,
                        postedby: _id,
                    },
                },
            },
                { new: true }
            );
            res.json(rateProduct);
        }
    } catch (error) {
        throw new Error(error)
    }
})