const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	slug: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	shortName: {
		type: String,
		required: true,
	},
	image: {
		mobile: String,
		tablet: String,
		desktop: String,
	},
	category: {
		type: String,
		required: true,
	},
	categoryImage: {
		mobile: String,
		tablet: String,
		desktop: String,
	},
	new: {
		type: Boolean,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	features: {
		type: String,
		required: true,
	},
	includes: [
		{
			quantity: Number,
			item: String,
		},
	],
	gallery: {
		first: {
			mobile: String,
			tablet: String,
			desktop: String,
		},
		second: {
			mobile: String,
			tablet: String,
			desktop: String,
		},
		third: {
			mobile: String,
			tablet: String,
			desktop: String,
		},
	},
	others: [
		{
			slug: String,
			name: String,
			image: {
				mobile: String,
				tablet: String,
				desktop: String,
			},
		},
	],
});

module.exports = mongoose.model('Product', productSchema);
