const Staff = require('../models/StaffProfile');

exports.createStaffProfile = async (staffData) => {
	const newStaff = new Staff(staffData);
	return await newStaff.save();
};

exports.updateStaffProfile = async (id, staffData) => {
	return await Staff.findByIdAndUpdate(id, staffData, { new: true });
};

exports.deleteStaffProfile = async (id) => {
	return await Staff.findByIdAndDelete(id);
};

exports.getStaffById = async (id) => {
	return await Staff.findById(id);
};

exports.getAllStaff = async () => {
	return await Staff.find();
};
