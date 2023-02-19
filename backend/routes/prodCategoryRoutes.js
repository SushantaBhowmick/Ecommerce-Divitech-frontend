const express = require('express');
const { 
    createCategory, 
    updateCategory,
    deleteCategory,
    GetAllCategory,
    GetACategory
} = require('../controllers/prodCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router(); 

router.route("/createCategory").post(authMiddleware,isAdmin, createCategory)
router.route("/").get(authMiddleware, GetAllCategory);
router.route("/:id").get(authMiddleware, GetACategory);
router.route("/:id").put(authMiddleware,isAdmin, updateCategory);
router.route("/:id").delete(authMiddleware,isAdmin, deleteCategory);

module.exports = router;