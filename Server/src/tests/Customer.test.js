const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../index');

describe('Customer Profile API', () => {
	// Test Case 1: Should create a new customer profile successfully.
	it('should create a new customer profile successfully', async () => {
		const newCustomer = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			password: 'password123',
			// Add other fields as necessary
		};

		const res = await request(app)
			.post('/api/customers') // Replace with your actual endpoint
			.send(newCustomer);

		expect(res.status).toBe(201);
		expect(res.body).toHaveProperty('name', newCustomer.name);
		expect(res.body).toHaveProperty('email', newCustomer.email);
		// Add other assertions as necessary
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});
