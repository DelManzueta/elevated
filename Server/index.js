const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8888;

const customerRoutes = require('./models/User/routes/customerRoutes');

app.use('/api/customers', customerRoutes);

// Middleware
app.use(cors());
app.use(express.json());

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

// Routes
app.get('/', (req, res) => {
	res.send('Welcome to Elevated Spa API');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
