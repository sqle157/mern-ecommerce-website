const Product = require('../models/productModel');

/**
 * @desc    Get all products
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = async (req, res) => {
	try {
		// Get all products
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};

/**
 * @desc    Get a single product
 * @route   GET /api/products/:slug
 * @access  Public
 */
const getProduct = async (req, res) => {
	const { slug } = req.params;

	// Find product by slug name
	const product = await Product.findOne({ slug });

	if (!product) {
		return res.status(404).json({ error: 'There is no such product!' });
	}

	res.status(200).json(product);
};

module.exports = { getProducts, getProduct };
