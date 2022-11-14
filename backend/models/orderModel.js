const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	zipCode: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	eNumber: {
		type: String,
	},
	ePIN: {
		type: String,
	},
	orders: [],
});

module.exports = mongoose.model('Order', orderSchema);
