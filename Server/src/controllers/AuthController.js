const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const { JWT_SECRET, EMAIL, PASSWORD } = process.env;

exports.signup = async (req, res) => {
	try {
		const { email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({ email, password: hashedPassword });
		await newUser.save();

		const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
			expiresIn: '30d', // Token expires in 30 days
		});

		res.status(201).json({ token });
	} catch (error) {
		console.error(error);
		// TODO: Add more specific error handling here
		res.status(500).json({ message: 'Server error' });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: '1d',
		});

		res.status(200).json({ token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.verify = async (req, res) => {
	try {
		const { token } = req.body;
		const decoded = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(decoded.id);
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}
		user.isVerified = true;
		await user.save();
		res.status(200).json({ message: 'Email verified successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.sendVerificationEmail = async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: '1d',
		});

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: EMAIL,
				pass: PASSWORD,
			},
		});

		const mailOptions = {
			from: EMAIL,
			to: email,
			subject: 'Email Verification',
			text: `Please verify your email by clicking the following link: http://localhost:8888/verify?token=${token}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				return res
					.status(500)
					.json({ message: 'Email could not be sent' });
			}
			console.log('Email sent: ' + info.response);
			res.status(200).json({ message: 'Verification email sent' });
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.requestPasswordReset = async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		// Generate a random verification code
		const verificationCode = Math.floor(
			100000 + Math.random() * 900000
		).toString();

		// Store this code in the database against the user for a limited time
		user.resetCode = verificationCode;
		user.resetCodeExpires = Date.now() + 600000; // Code expires in 10 minutes
		await user.save();

		// Send the verification code to the user's email
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: EMAIL,
				pass: PASSWORD,
			},
		});
		const mailOptions = {
			from: EMAIL,
			to: email,
			subject: 'Password Reset Verification Code',
			text: `Your verification code is: ${verificationCode}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				return res
					.status(500)
					.json({ message: 'Email could not be sent' });
			}
			console.log('Email sent: ' + info.response);
			res.status(200).json({
				message: 'Verification code sent to email',
			});
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.resetPassword = async (req, res) => {
	try {
		const { email, newPassword } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10);
		user.password = hashedPassword;
		await user.save();

		res.status(200).json({ message: 'Password reset successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = exports;

// TODO List for Production:
// 1. Replace console.error with a more robust logging solution.
// 2. Replace localhost URLs with production URLs.
// 3. Add more specific error handling for JWT and database errors.
// 4. Implement rate-limiting for API routes to prevent abuse.
// 5. Consider using HTTPS for added security.
