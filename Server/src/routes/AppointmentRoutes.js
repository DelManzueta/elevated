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

// Function to check if a staff member is available
const isStaffAvailable = (staffID, date, time, appointments) => {
	return !appointments.some(
		(appt) =>
			appt.staffID === staffID && appt.date === date && appt.time === time
	);
};

router.post('/bookAppointment', (req, res) => {
	const { customerID, staffID, date, time } = req.body;

	const extAppointments = JSON.parse(
		fs.readFileSync(appointmentMockData, 'utf8')
	);

	// Check staff availability
	if (!isStaffAvailable(staffID, date, time, extAppointments)) {
		return res.status(400).json({
			status: 'Failed',
			message: 'Staff is not available at the selected time.',
		});
	}

	const newAppointment = {
		id: extAppointments.length + 1,
		customerID,
		staffID,
		date,
		time,
		status: 'Pending',
	};

	extAppointments.push(newAppointment);

	fs.writeFileSync(
		appointmentMockData,
		JSON.stringify(extAppointments, null, 2)
	);

	res.json({
		status: 'Appointment Confirmed',
		appointmentID: newAppointment.id,
	});
});

router.put('/updateAppointmentStatus/:id', (req, res) => {
	const { id } = req.params;
	const { status } = req.body;

	const extAppointments = JSON.parse(
		fs.readFileSync(appointmentMockData, 'utf8')
	);

	const appointmentIndex = extAppointments.findIndex(
		(appointment) => appointment.id === parseInt(id)
	);

	if (appointmentIndex === -1) {
		return res.status(404).json({ status: 'Appointment not found' });
	}

	extAppointments[appointmentIndex].status = status;

	fs.writeFileSync(
		appointmentMockData,
		JSON.stringify(extAppointments, null, 2)
	);

	res.json({
		status: 'Appointment status updated',
		updatedAppointment: extAppointments[appointmentIndex],
	});
});

module.exports = router;
