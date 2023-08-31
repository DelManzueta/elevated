const staffService = require('../services/staffService');

exports.createStaff = async (req, res) => {
	try {
		const newStaff = await staffService.createStaffProfile(req.body);
		res.status(201).json(newStaff);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.updateStaff = async (req, res) => {
	try {
		const updatedStaff = await staffService.updateStaffProfile(
			req.params.id,
			req.body
		);
		if (!updatedStaff)
			return res.status(404).json({ message: 'Staff not found' });
		res.status(200).json(updatedStaff);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.deleteStaff = async (req, res) => {
	try {
		const deletedStaff = await staffService.deleteStaffProfile(
			req.params.id
		);
		if (!deletedStaff)
			return res.status(404).json({ message: 'Staff not found' });
		res.status(200).json({ message: 'Staff deleted successfully' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getStaffById = async (req, res) => {
	try {
		const staff = await staffService.getStaffById(req.params.id);
		if (!staff) return res.status(404).json({ message: 'Staff not found' });
		res.status(200).json(staff);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getAllStaff = async (req, res) => {
	try {
		const staffMembers = await staffService.getAllStaff();
		res.status(200).json(staffMembers);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
