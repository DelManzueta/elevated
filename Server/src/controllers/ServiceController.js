const Service = require('../models/Service');

// Add the searchServices function with autofill logic
exports.searchServices = async (req, res) => {
	try {
		const { name, type } = req.query;
		const query = {};
		if (name) {
			query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive partial match
		}
		if (type) {
			query.type = { $regex: new RegExp(type, 'i') }; // Case-insensitive partial match
		}
		const services = await Service.find(query);
		res.json(services);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createService = async (req, res) => {
	try {
		const service = new Service(req.body);
		await service.save();
		res.status(201).json(service);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getAllServices = async (req, res) => {
	try {
		const services = await Service.find();
		res.json(services);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getServiceById = async (req, res) => {
	try {
		const service = await Service.findById(req.params.id);
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateService = async (req, res) => {
	try {
		const service = await Service.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.deleteService = async (req, res) => {
	try {
		const service = await Service.findByIdAndDelete(req.params.id);
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json({ message: 'Service deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
