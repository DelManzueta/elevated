const mongoose = require('mongoose');

// Define the schema for the service
const serviceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true, // Name is required
	},
	type: {
		type: String,
		required: true, // Type is required to categorize the service
	},
	description: {
		type: String,
		// Description is optional, so 'required' is not set
	},
	price: {
		type: Number,
		required: true, // Price is required
	},
	estimatedDuration: {
		type: Number,
		required: true, // Estimated duration in minutes is required
	},
});

// Create a model from the schema
module.exports = mongoose.model('Service', serviceSchema);
