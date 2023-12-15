const express = require('express');
const { GET_PRODUCT, SEARCH_PRODUCT } = require('../controllers/productController');
const router = express.Router();
router.get('/get-all-product', GET_PRODUCT)
router.get('/search', SEARCH_PRODUCT)
module.exports = router;