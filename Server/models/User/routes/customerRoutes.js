const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

// Create a new customer
router.post('/', customerController.createCustomer);

// Get a single customer by ID
router.get('/:id', customerController.getCustomerById);

// Update a customer by ID
router.put('/:id', customerController.updateCustomer);

// Delete a customer by ID
router.delete('/:id', customerController.deleteCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

module.exports = router;
