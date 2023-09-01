const Customer = require('../models/CustomerProfile');
const customerService = require('../services/customerService');

// Create a new customer profile
exports.createCustomer = async (req, res) => {
	try {
		const newCustomer = await customerService.createCustomerProfile(
			req.body
		);
		res.status(201).json(newCustomer);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
	try {
		const customer = await customerService.getCustomerById(req.params.id);
		if (!customer)
			return res.status(404).json({ message: 'Customer not found' });
		res.status(200).json(customer);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
	try {
		const updatedCustomer = await customerService.updateCustomerProfile(
			req.params.id,
			req.body
		);
		if (!updatedCustomer)
			return res.status(404).json({ message: 'Customer not found' });
		res.status(200).json(updatedCustomer);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
	try {
		const deletedCustomer = await customerService.deleteCustomerProfile(
			req.params.id
		);
		if (!deletedCustomer)
			return res.status(404).json({ message: 'Customer not found' });
		res.status(200).json({ message: 'Customer deleted successfully' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
	try {
		const customers = await customerService.getAllCustomers();
		res.status(200).json(customers);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.resetCustomerProfile = async (req, res) => {
	try {
		const resetCustomer = await customerService.resetCustomerProfile(
			req.params.id,
			req.body
		);
		res.status(200).json(resetCustomer);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Search for customer profiles based on query parameters
exports.searchCustomerProfile = async (req, res) => {
	try {
		const customers = await customerService.searchCustomerProfiles(
			req.query
		);
		res.status(200).json(customers);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
