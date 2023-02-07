const express = require('express');
const { 
    createProduct, 
    getaProduct, 
    getAllProduct, 
    updateProduct,
    deleteProduct
} = require('../controllers/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.route('/create').post(authMiddleware,isAdmin,createProduct);
router.route('/find/:id').get(getaProduct);
router.route('/find').get(getAllProduct);
router.route('/update/:id').put(authMiddleware,isAdmin,updateProduct);
router.route('/delete/:id').delete(authMiddleware,isAdmin,deleteProduct);

module.exports = router;
//3.01.00m