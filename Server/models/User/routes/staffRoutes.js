const express = require('express');
const router = express.Router();
const staffController = require('../controllers/StaffController');

router.post('/', staffController.createStaff);
router.put('/:id', staffController.updateStaff);
router.delete('/:id', staffController.deleteStaff);
router.get('/:id', staffController.getStaffById);
router.get('/', staffController.getAllStaff);

module.exports = router;
