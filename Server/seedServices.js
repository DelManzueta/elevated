const mongoose = require('mongoose');
const Service = require('./src/models/Service');

// Array of service objects
const services = [
	{
		name: 'Deep Tissue Massage',
		type: 'Massage Therapy',
		description:
			'A massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries.',
		price: 120,
		estimatedDuration: 90,
	},
	{
		name: 'Swedish Massage',
		type: 'Massage Therapy',
		description:
			'A gentle type of full-body massage that’s ideal for people who are new to massage, have a lot of tension, or are sensitive to touch.',
		price: 100,
		estimatedDuration: 60,
	},
	{
		name: 'Aromatherapy Massage',
		type: 'Massage Therapy',
		description:
			'Massage therapy with essential oils added to the massage oil. Inhaling essential oils through the nose is thought to promote beneficial changes in the mind and body.',
		price: 150,
		estimatedDuration: 70,
	},
	{
		name: 'Hot Stone Massage',
		type: 'Massage Therapy',
		description:
			'A type of massage therapy, it involves placing smooth, flat, heated stones on specific parts of your body.',
		price: 130,
		estimatedDuration: 80,
	},
	{
		name: 'Reflexology',
		type: 'Wellness',
		description:
			'A type of massage that involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.',
		price: 80,
		estimatedDuration: 50,
	},
	{
		name: 'Facial Treatment',
		type: 'Skincare',
		description:
			'A multi-step skin treatment that is one of the best ways to take care of your skin. A facial cleanses, exfoliates, and nourishes the skin, promoting a clear, well-hydrated complexion.',
		price: 90,
		estimatedDuration: 60,
	},
	{
		name: 'Body Scrub',
		type: 'Skincare',
		description:
			'A popular body treatment that is basically a facial for the body: it exfoliates and hydrates your skin, leaving it smooth and soft.',
		price: 70,
		estimatedDuration: 45,
	},
	{
		name: 'Manicure',
		type: 'Nail Service',
		description:
			'A cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon.',
		price: 35,
		estimatedDuration: 30,
	},
	{
		name: 'Pedicure',
		type: 'Nail Service',
		description:
			'A cosmetic treatment of the feet and toenails, analogous to a manicure.',
		price: 45,
		estimatedDuration: 45,
	},
	{
		name: 'Yoga Class',
		type: 'Fitness',
		description:
			'A disciplined method for attaining a goal, and controlling the body and the mind.',
		price: 20,
		estimatedDuration: 60,
	},
];

// Function to connect to the database and insert services
const seedServices = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/elevated_spa', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');

		// Clear the Service collection
		await Service.deleteMany({});
		console.log('Service collection cleared');

		// Insert the services into the database
		await Service.insertMany(services);
		console.log('Services added successfully');
	} catch (error) {
		console.error('Error seeding services:', error);
	} finally {
		// Close the database connection
		mongoose.disconnect();
	}
};

// Execute the seeding function
seedServices();
