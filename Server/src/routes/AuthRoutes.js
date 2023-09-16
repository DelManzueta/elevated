const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/verify', authController.verify);
router.post('/verify-email', authController.sendVerificationEmail);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
