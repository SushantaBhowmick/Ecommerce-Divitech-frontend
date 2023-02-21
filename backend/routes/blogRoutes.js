const express = require('express');
const { 
     createBlog,
     updateBlog, 
     getAllBlog, 
     getABlog, 
     deleteBlog,
     likeBlog,
     disLikeBlog
    } = require('../controllers/blogCtrl');
const { uploadImages } = require('../controllers/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages');
const router = express.Router();


router.route('/create').post(authMiddleware,isAdmin,createBlog);
router.route('/upload/:id').put(
    authMiddleware,
    isAdmin,uploadPhoto.array('images',2),
    blogImgResize,
    uploadImages)

router.route('/').get(authMiddleware,getAllBlog);
router.route('/:id').get(getABlog);
router.route('/update/:id').put(authMiddleware,isAdmin,updateBlog);
router.route('/delete/:id').delete(authMiddleware,isAdmin,deleteBlog);
router.route('/likes').put(authMiddleware,likeBlog);
router.route('/dislikes').put(authMiddleware,disLikeBlog);

module.exports = router;  