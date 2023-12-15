const express = require('express');
const router = express.Router();

const productRouter = require('./productRouter');
const shoppingCartRouter = require('./shoppingCartRouter');

router.use('/product', productRouter);
router.use('/cart', shoppingCartRouter);

module.exports = router;