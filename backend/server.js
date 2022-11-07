require('dotenv').config();
require('colors');
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // parse JSON data

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	// Set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to the Ecommerce App API' });
	});
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
