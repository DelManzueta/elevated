const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { JWT_SECRET } = process.env;

exports.signup = async (req, res) => {
	try {
		const { email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({ email, password: hashedPassword });
		await newUser.save();

		const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
			expiresIn: '1d',
		});

		res.status(201).json({ token });
	} catch (error) {
		console.error(error);
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
	// Your verification logic here
};
