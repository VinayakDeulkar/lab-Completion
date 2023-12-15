const express = require('express');
const { GET_CART, ADD_CART, DELETE_CART } = require('../controllers/shoppingCartController');
const router = express.Router();
router.get('/get-cart', GET_CART)
router.post('/add-cart', ADD_CART)
router.delete('/delete-cart', DELETE_CART)
module.exports = router;