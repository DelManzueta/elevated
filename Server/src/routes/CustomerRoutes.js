const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

router.post('/', customerController.createCustomer);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/', customerController.getAllCustomers);

// Search
router.get('/search', customerController.searchCustomerProfile);
// Reset
router.post('/reset/:id', customerController.resetCustomerProfile);

module.exports = router;
