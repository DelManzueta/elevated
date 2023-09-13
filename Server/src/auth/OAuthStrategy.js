const GoogleStrategy = require('passport-google-oauth20').Strategy;
const AppleStrategy = require('passport-apple').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

// Initialize dotenv for environment variables
require('dotenv').config();

module.exports = (passport) => {
	// Google OAuth Strategy
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: '/auth/google/callback',
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					const existingUser = await User.findOne({
						email: profile.emails[0].value,
					});
					if (existingUser) {
						return done(null, existingUser);
					}
					const newUser = new User({
						username: profile.displayName,
						email: profile.emails[0].value,
						role: 'customer', // default role
					});
					await newUser.save();
					return done(null, newUser);
				} catch (error) {
					return done(error, false);
				}
			}
		)
	);

	// Apple OAuth Strategy
	passport.use(
		new AppleStrategy(
			{
				clientID: process.env.APPLE_CLIENT_ID,
				teamID: process.env.APPLE_TEAM_ID,
				callbackURL: '/auth/apple/callback',
				keyID: process.env.APPLE_KEY_ID,
				privateKeyLocation: process.env.APPLE_PRIVATE_KEY_LOCATION,
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					const existingUser = await User.findOne({
						email: profile.email,
					});
					if (existingUser) {
						return done(null, existingUser);
					}
					const newUser = new User({
						username: profile.name,
						email: profile.email,
						role: 'customer', // default role
					});
					await newUser.save();
					return done(null, newUser);
				} catch (error) {
					return done(error, false);
				}
			}
		)
	);
};
