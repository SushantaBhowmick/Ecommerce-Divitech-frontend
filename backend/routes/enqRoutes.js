const express = require('express');
const { 
    createEnquiry,
    GetAllEnquiry,
    GetAEnquiry,
    updateEnquiry,
    deleteEnquiry
} = require('../controllers/enqCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router(); 

router.route("/createEnq").post(authMiddleware,isAdmin, createEnquiry)
router.route("/").get(authMiddleware, GetAllEnquiry);
router.route("/:id").get(authMiddleware, GetAEnquiry);
router.route("/:id").put(authMiddleware,isAdmin, updateEnquiry);
router.route("/:id").delete(authMiddleware,isAdmin, deleteEnquiry);

module.exports = router;