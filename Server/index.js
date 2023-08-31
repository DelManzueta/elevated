const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const customerRoutes = require('./models/User/routes/customerRoutes');
const staffRoutes = require('./models/User/routes/staffRoutes');
const adminRoutes = require('./models/User/routes/adminRoutes');
// const appointmentRoutes = require('./models/Appointment/routes/appointmentRoutes');
// Use routes
app.use('/api/customers', customerRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/admin', adminRoutes);
// app.use('/api/appointments', appointmentRoutes);

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
