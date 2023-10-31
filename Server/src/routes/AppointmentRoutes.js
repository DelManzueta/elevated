const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const appointmentMockData = path.join(
	__dirname,
	'..',
	'..',
	'mockData',
	'appointments.json'
);

router.post('/bookAppointment', (req, res) => {
	const { customerID, staffID, date, time } = req.body;

	// read mock data file
	const extAppointments = JSON.parse(
		fs.readFileSync(appointmentMockData, 'utf8')
	);

	// create appointment
	const newAppointment = {
		id: extAppointments.length + 1,
		customerID,
		staffID,
		date,
		time,
		status: 'Pending',
	};

	// add new appointment to existing appointments
	extAppointments.push(newAppointment);

	// write and update to mock data file
	fs.writeFileSync(
		appointmentMockData,
		JSON.stringify(extAppointments, null, 2)
	);

	// response
	res.json({
		status: 'Appointment Confirmed',
		appointmentID: newAppointment.id,
	});
});

router.put('/updateAppointmentStatus/:id', (req, res) => {
	const { id } = req.params;
	const { status } = req.body;

	// Read the existing appointments from the mock data file
	const extAppointments = JSON.parse(
		fs.readFileSync(appointmentMockData, 'utf8')
	);

	// Find the appointment with the given ID
	const appointmentIndex = extAppointments.findIndex(
		(appointment) => appointment.id === parseInt(id)
	);

	// If appointment not found, return an error
	if (appointmentIndex === -1) {
		return res.status(404).json({ status: 'Appointment not found' });
	}

	// Update the status of the found appointment
	extAppointments[appointmentIndex].status = status;

	// Write the updated appointments back to the mock data file
	fs.writeFileSync(
		appointmentMockData,
		JSON.stringify(extAppointments, null, 2)
	);

	// Respond with a confirmation
	res.json({
		status: 'Appointment status updated',
		updatedAppointment: extAppointments[appointmentIndex],
	});
});

module.exports = router;
