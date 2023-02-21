const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const { cloudinaryUploadingImg } = require("../utils/cloudinary");
const fs = require('fs')

const { validateMongoId } = require("../utils/validateMongodbId");


//Create Blog
exports.createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            success: true,
            newBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})

//update Blog
exports.updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)

    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json({
            success: true,
            updateBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})

//Get a Blog
exports.getABlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)

    try {
        const getBlog = await Blog.findById(id).populate("likes").populate("dislikes");
        const updateViews = await Blog.findByIdAndUpdate(
            id, {
            $inc: { numOfViews: 1 }
        },
            { new: true }
        );
        res.json(getBlog)
    } catch (error) {
        throw new Error(error)

    }
})

//Get all Blog
exports.getAllBlog = asyncHandler(async (req, res) => {

    try {
        const blogs = await Blog.find();
        res.json({
            success: true,
            blogs
        })
    } catch (error) {
        throw new Error(error)
    }
})


//delete Blog
exports.deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoId(id)

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        // if(!deletedBlog) throw new Error("Blog not found");
        res.json({
            success: true,
            message: "Blog Deleted Successfully!",
            deletedBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})


//Like Blogs

exports.likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoId(blogId)

    //find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;
    //find if the user is liked the post
    const isLiked = blog?.isLiked;
    //find if the user has disLiked the post
    const alreadyDisLiked = blog?.dislikes?.find(
        (userId => userId?.toString() === loginUserId?.toString()));
    if (alreadyDisLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false
        }, {
            new: true,
        });
        res.json(blog)
    }
    else if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false
        }, {
            new: true,
        });
        res.json(blog)
    }
    else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            isLiked: true,
        }, {
            new: true,
        });
        res.json(blog)
    }
})

//Dislike Blogs
exports.disLikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoId(blogId)

    //find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;
    //find if the user is liked the post
    const isDisLiked = blog?.isDisliked;
    //find if the user has disLiked the post
    const alreadyLiked = blog?.likes?.find(
        (userId => userId?.toString() === loginUserId?.toString()));
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false
        }, {
            new: true,
        });
        res.json(blog)
    }
    else if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { dislikes: loginUserId },
            isDisliked: false
        }, {
            new: true,
        });
        res.json(blog)
    }
    else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { dislikes: loginUserId },
            isDisliked: true,
        }, {
            new: true,
        });
        res.json(blog)
    }
})


exports.uploadImages = asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log(id);
    validateMongoId(id);

    try {
        
        const uploader = (path) => cloudinaryUploadingImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);

        }
      
        const findBlog= await Blog.findByIdAndUpdate(id,{
            images: urls.map((file)=>{
                return file;
            }),
        });
        res.json(findBlog);
    } catch (error) {
        throw new Error(error)
    }
})

//5.11.25 h