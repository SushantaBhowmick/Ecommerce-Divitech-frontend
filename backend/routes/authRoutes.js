const express = require('express');
const { 
    createUser, 
    loginUser, 
    getAllUser, 
    getUser, 
    deleteUser, 
    updateUser, 
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus
} = require('../controllers/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/admin-login').post(loginAdmin);
router.route('/cart').post(authMiddleware, userCart);
router.route('/cart/applycoupon').post(authMiddleware, applyCoupon);
router.route('/cart/cashorder').post(authMiddleware, createOrder);
router.route('/get-orders').get(authMiddleware, getOrders);
router.route('/order/update-order/:id').put(authMiddleware,isAdmin, updateOrderStatus);

router.route('/users').get(getAllUser);
router.route('/refresh').get(handleRefreshToken);
router.route('/wishlist').get(authMiddleware,getWishlist);
router.route('/carts').get(authMiddleware,getUserCart);
router.route('/:id').get(authMiddleware,isAdmin, getUser);
router.route('/empty-cart').delete(authMiddleware,emptyCart)
router.route('/delete/:id').delete(deleteUser);
router.route('/update').put(authMiddleware,updateUser);
router.route('/save-address').put(authMiddleware,saveAddress);
router.route('/block-user/:id').put(authMiddleware,isAdmin, blockUser);
router.route('/unblock-user/:id').put(authMiddleware,isAdmin,unblockUser);
router.route('/logout').get(logout);
router.route('/password').put(authMiddleware,updatePassword)
router.route('/forgot-password-token').post(forgotPasswordToken)
router.route('/reset-password/:token').put(resetPassword)

module.exports=router;