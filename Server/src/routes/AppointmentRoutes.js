const express = require('express');
const {
	bookAppointment,
	getAllAppointments,
	getAppointmentById,
	updateAppointment,
	cancelAppointment,
} = require('../controllers/AppointmentController');

const router = express.Router();

router.post('/', bookAppointment);
router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.patch('/:id/cancel', cancelAppointment); // Using PATCH for partial update

module.exports = router;
