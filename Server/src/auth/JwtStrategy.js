const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User'); // Import the User model
const { JWT_SECRET } = process.env;

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_SECRET,
};

module.exports = (passport) => {
	passport.use(
		new JwtStrategy(options, async (jwt_payload, done) => {
			try {
				const user = await User.findById(jwt_payload.id);
				if (user) {
					return done(null, user);
				}
				return done(null, false);
			} catch (error) {
				console.error(error);
				return done(error, false);
			}
		})
	);
};
