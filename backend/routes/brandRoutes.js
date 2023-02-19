const express = require('express');
const { 
    createBrand,
    GetAllBrand,
    GetABrand,
    updateBrand,
    deleteBrand
} = require('../controllers/brandCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router(); 

router.route("/createBrand").post(authMiddleware,isAdmin, createBrand)
router.route("/").get(authMiddleware, GetAllBrand);
router.route("/:id").get(authMiddleware, GetABrand);
router.route("/:id").put(authMiddleware,isAdmin, updateBrand);
router.route("/:id").delete(authMiddleware,isAdmin, deleteBrand);

module.exports = router;