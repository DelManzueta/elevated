const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
	try {
		const appointment = new Appointment(req.body);
		await appointment.save();
		res.status(201).json(appointment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getAllAppointments = async (req, res) => {
	try {
		const appointments = await Appointment.find().populate('services');
		res.json(appointments);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getAppointmentById = async (req, res) => {
	try {
		const appointment = await Appointment.findById(req.params.id).populate(
			'services'
		);
		if (!appointment) {
			return res.status(404).json({ message: 'Appointment not found' });
		}
		res.json(appointment);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateAppointment = async (req, res) => {
	try {
		const appointment = await Appointment.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!appointment) {
			return res.status(404).json({ message: 'Appointment not found' });
		}
		res.json(appointment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.cancelAppointment = async (req, res) => {
	try {
		const appointment = await Appointment.findByIdAndUpdate(
			req.params.id,
			{ status: 'Cancelled' },
			{ new: true }
		);
		if (!appointment) {
			return res.status(404).json({ message: 'Appointment not found' });
		}
		res.json({
			message: 'Appointment cancelled successfully',
			appointment,
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
