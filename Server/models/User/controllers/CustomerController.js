const Customer = require('../models/CustomerProfile');

// Create a new customer profile
exports.createCustomer = async (req, res) => {
	try {
		const newCustomer = new Customer(req.body);
		await newCustomer.save();
		res.status(201).json(newCustomer);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
	try {
		const customer = await Customer.findById(req.params.id);
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
		const updatedCustomer = await Customer.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
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
		const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
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
		const customers = await Customer.find();
		res.status(200).json(customers);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
