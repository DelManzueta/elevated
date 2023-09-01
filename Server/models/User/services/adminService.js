const Admin = require('../models/AdminProfile');

exports.createAdminProfile = async (adminData) => {
	const newAdmin = new Admin(adminData);
	return await newAdmin.save();
};

exports.updateAdminProfile = async (id, adminData) => {
	return await Admin.findByIdAndUpdate(id, adminData, { new: true });
};

exports.deleteAdminProfile = async (id) => {
	return await Admin.findByIdAndDelete(id);
};

exports.getAdminById = async (id) => {
	return await Admin.findById(id);
};

exports.getAllAdmins = async () => {
	return await Admin.find();
};

exports.resetAdminProfile = async (id, fieldsToReset) => {
	return await Admin.findByIdAndUpdate(id, fieldsToReset, { new: true });
};

exports.searchAdminProfiles = async (query) => {
	return await Admin.find(query);
};
