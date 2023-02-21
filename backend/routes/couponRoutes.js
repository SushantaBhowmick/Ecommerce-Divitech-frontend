const express = require('express');
const { 
    createCoupon, 
    getAllCoupon, 
    updateCoupon, 
    deleteCoupon 
} = require('../controllers/couponCtrl');

const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router(); 

router.route('/').post(authMiddleware,isAdmin, createCoupon);
router.route('/get').get(authMiddleware,isAdmin, getAllCoupon);
router.route('/:id').put(authMiddleware,isAdmin, updateCoupon);
router.route('/:id').delete(authMiddleware,isAdmin, deleteCoupon);

module.exports = router;