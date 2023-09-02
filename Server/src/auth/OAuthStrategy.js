const GoogleStrategy = require('passport-google-oauth20').Strategy;
const AppleStrategy = require('passport-apple').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (passport) => {
	passport.use(
		new GoogleStrategy(
			{
				// Google OAuth settings here
			},
			async (accessToken, refreshToken, profile, done) => {
				// Google OAuth logic here
			}
		)
	);

	passport.use(
		new AppleStrategy(
			{
				// Apple OAuth settings here
			},
			async (accessToken, refreshToken, profile, done) => {
				// Apple OAuth logic here
			}
		)
	);
};
