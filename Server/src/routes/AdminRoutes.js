const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const checkRole = require('../middleware/checkRole');

router.post('/', checkRole(['admin']), adminController.createAdmin);

router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);
router.get('/:id', adminController.getAdminById);
router.get('/', adminController.getAllAdmins);

router.get('/search', adminController.searchAdminProfile);
router.post('/reset/:id', adminController.resetAdminProfile);

module.exports = router;
