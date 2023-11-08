const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
	customerID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Customer',
	},
	services: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Service',
		},
	],
	date: {
		type: Date,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
		default: 'Pending',
	},
	// Additional fields as needed
});

module.exports = mongoose.model('Appointment', appointmentSchema);
