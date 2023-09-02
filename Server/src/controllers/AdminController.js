const adminService = require('../services/adminService');

exports.createAdmin = async (req, res) => {
	try {
		const newAdmin = await adminService.createAdminProfile(req.body);
		res.status(201).json(newAdmin);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.updateAdmin = async (req, res) => {
	try {
		const updatedAdmin = await adminService.updateAdminProfile(
			req.params.id,
			req.body
		);
		if (!updatedAdmin)
			return res.status(404).json({ message: 'Admin not found' });
		res.status(200).json(updatedAdmin);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.deleteAdmin = async (req, res) => {
	try {
		const deletedAdmin = await adminService.deleteAdminProfile(
			req.params.id
		);
		if (!deletedAdmin)
			return res.status(404).json({ message: 'Admin not found' });
		res.status(200).json({ message: 'Admin deleted successfully' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getAdminById = async (req, res) => {
	try {
		const admin = await adminService.getAdminById(req.params.id);
		if (!admin) return res.status(404).json({ message: 'Admin not found' });
		res.status(200).json(admin);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.getAllAdmins = async (req, res) => {
	try {
		const admins = await adminService.getAllAdmins();
		res.status(200).json(admins);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.resetAdminProfile = async (req, res) => {
	try {
		const resetAdmin = await adminService.resetAdminProfile(
			req.params.id,
			req.body
		);
		res.status(200).json(resetAdmin);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.searchAdminProfile = async (req, res) => {
	try {
		const admins = await adminService.searchAdminProfiles(req.query);
		res.status(200).json(admins);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
