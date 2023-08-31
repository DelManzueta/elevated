const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

router.post('/', customerController.createCustomer);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/', customerController.getAllCustomers);

module.exports = router;
