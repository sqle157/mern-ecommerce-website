const mongoose = require('mongoose');

// Connect to the database
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`ERROR: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

module.exports = connectDB;
