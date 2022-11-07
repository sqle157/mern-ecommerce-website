const express = require('express');
const router = express.Router();

const { createOrder } = require('../controllers/orderController');

// create a order
router.post('/', createOrder);

module.exports = router;
