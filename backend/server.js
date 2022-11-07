require('dotenv').config();
require('colors');

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
