const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const { validateMongoId } = require("../utils/validateMongodbId");

exports.createBlog = asyncHandler(async(req,res)=>{
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            success:true,
            newBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})

//4.30.00