const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User'); // Import the User model
const { JWT_SECRET } = process.env;

// JWT options
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_SECRET,
};

module.exports = (passport) => {
	// Use JWT strategy
	passport.use(
		new JwtStrategy(options, async (jwt_payload, done) => {
			try {
				// Find the user specified in token
				const user = await User.findById(jwt_payload.id);

				// If user exists, return the user
				if (user) {
					return done(null, user);
				}

				// If user does not exist, return false
				return done(null, false);
			} catch (error) {
				console.error(error);
				return done(error, false);
			}
		})
	);
};
