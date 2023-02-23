const express = require('express');
const { 
    createColor,
    GetAllColor,
    GetAColor,
    updateColor,
    deleteColor
} = require('../controllers/colorCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router(); 

router.route("/createColor").post(authMiddleware,isAdmin, createColor)
router.route("/").get(authMiddleware, GetAllColor);
router.route("/:id").get(authMiddleware, GetAColor);
router.route("/:id").put(authMiddleware,isAdmin, updateColor);
router.route("/:id").delete(authMiddleware,isAdmin, deleteColor);

module.exports = router;