require('dotenv').config();
require('colors');

const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use('/api/products', require('./routes/productRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
