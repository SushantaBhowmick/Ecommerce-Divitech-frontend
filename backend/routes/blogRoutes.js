const express = require('express');
const { createBlog } = require('../controllers/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();


router.route('/').post(authMiddleware,isAdmin,createBlog);

module.exports = router;