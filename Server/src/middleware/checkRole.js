module.exports = (roles) => {
	return (req, res, next) => {
		const userRole = req.user.role;
		const isVerified = req.user.isVerified;
		if (!roles.includes(userRole) || !isVerified) {
			return res.status(403).json({ message: 'Access Denied' });
		}
		next();
	};
};
