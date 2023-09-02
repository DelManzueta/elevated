const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

// Initialize the app
const app = express();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Import and register the User model
const User = require('./src/models/User');

// Initialize Passport for authentication
require('./src/auth/JwtStrategy')(passport); // Importing JWT strategy
app.use(passport.initialize());

// Import routes
const customerRoutes = require('./src/routes/CustomerRoutes');
const staffRoutes = require('./src/routes/StaffRoutes');
const adminRoutes = require('./src/routes/AdminRoutes');
const authRoutes = require('./src/routes/AuthRoutes'); // Importing authentication routes

// Use routes
app.use('/api/customers', customerRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes); // Using authentication routes

// Connect to MongoDB
mongoose
	.connect('mongodb://localhost:27017/elevated_spa', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.error('An error occurred:', err);
	});

// Default Route
app.get('/', (req, res) => {
	res.send('Welcome to Elevated Spa API');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
