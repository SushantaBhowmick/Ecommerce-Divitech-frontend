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
    resetPassword
} = require('../controllers/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/users').get(getAllUser);
router.route('/refresh').get(handleRefreshToken);
router.route('/user/:id').get(authMiddleware,isAdmin, getUser);
router.route('/delete/:id').delete(deleteUser);
router.route('/update').put(authMiddleware,updateUser);
router.route('/block-user/:id').put(authMiddleware,isAdmin, blockUser);
router.route('/unblock-user/:id').put(authMiddleware,isAdmin,unblockUser);
router.route('/logout').get(logout);
router.route('/password').put(authMiddleware,updatePassword)
router.route('/forgot-password-token').post(forgotPasswordToken)
router.route('/reset-password/:token').put(resetPassword)

module.exports=router;