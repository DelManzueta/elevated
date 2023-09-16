const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const customerController = require('../controllers/CustomerController');

router.post('/', checkRole(['customer']), customerController.createCustomer);

router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/', customerController.getAllCustomers);

// Search
router.get('/search', customerController.searchCustomerProfile);
// Reset
router.post('/reset/:id', customerController.resetCustomerProfile);

module.exports = router;
