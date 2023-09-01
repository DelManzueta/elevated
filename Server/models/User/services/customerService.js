const Customer = require('../models/CustomerProfile');

exports.createCustomerProfile = async (customerData) => {
	const newCustomer = new Customer(customerData);
	return await newCustomer.save();
};

exports.updateCustomerProfile = async (id, customerData) => {
	return await Customer.findByIdAndUpdate(id, customerData, { new: true });
};

exports.deleteCustomerProfile = async (id) => {
	return await Customer.findByIdAndDelete(id);
};

exports.getCustomerById = async (id) => {
	return await Customer.findById(id);
};

exports.getAllCustomers = async () => {
	return await Customer.find();
};

exports.searchCustomerProfiles = async (query) => {
	return await Customer.find(query);
};

exports.resetCustomerProfile = async (id, fieldsToReset) => {
	return await Customer.findByIdAndUpdate(id, fieldsToReset, { new: true });
};
