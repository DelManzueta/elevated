const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const logger = require('./src/middleware/logger');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

app.use(logger);
app.use(cors());
app.use(express.json());

require('./src/auth/JwtStrategy')(passport);
app.use(passport.initialize());

const User = require('./src/models/User');

const customerRoutes = require('./src/routes/CustomerRoutes');
const staffRoutes = require('./src/routes/StaffRoutes');
const adminRoutes = require('./src/routes/AdminRoutes');
const authRoutes = require('./src/routes/AuthRoutes');
const appointmentRoutes = require('./src/routes/AppointmentRoutes');

app.use('/api/customers', customerRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

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

app.get('/', (req, res) => {
	res.send('Welcome to Elevated Spa API');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
