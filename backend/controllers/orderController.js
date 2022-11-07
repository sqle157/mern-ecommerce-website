const Order = require('../models/orderModel');
const validator = require('validator');

/**
 * @desc    Create new order
 * @route   POST /api/order
 * @access  Public
 */
const createOrder = async (req, res) => {
	const {
		name,
		email,
		phone,
		address,
		zipCode,
		city,
		country,
		method,
		eNumber,
		ePIN,
		orders,
	} = req.body;

	let emptyFields = [];
	let errorFields = [];
	const usZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
	const caZipCode =
		/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i;

	// Check for empty fields
	if (!name || !email || !phone || !address || !zipCode || !city || !country) {
		emptyFields.push('info');
	}

	if (method === 'e-Money' && !eNumber && !ePIN) {
		emptyFields.push('method');
	}

	if (emptyFields.length > 0) {
		return res.status(400).json({ error: 'Empty Field', emptyFields });
	}

	// Check for validation
	if (!validator.isEmail(email)) {
		errorFields.push('email');
	}

	if (!validator.isMobilePhone(phone, 'any', { strictMode: true })) {
		errorFields.push('phone');
	}

	if (!usZipCode.test(zipCode) && !caZipCode.test(zipCode)) {
		errorFields.push('zip-code');
	}

	if (errorFields.length > 0) {
		return res.status(400).json({ error: 'Wrong Format', errorFields });
	}

	try {
		// Create new order
		const order = await Order.create({
			name,
			email,
			phone,
			address,
			zipCode,
			city,
			country,
			paymentMethod: method,
			eNumber,
			ePIN,
			orders,
		});
		res.status(200).json(order);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { createOrder };
