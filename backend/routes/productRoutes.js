const express = require('express');
const router = express.Router();

const { getProducts, getProduct } = require('../controllers/productController');

// get all products
router.get('/', getProducts);

// get a product
router.get('/:slug', getProduct);

module.exports = router;
