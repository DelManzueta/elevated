const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../index');

describe('Customer Profile API', () => {
	it('should return a 200 OK status code', async () => {
		const res = await request(app).get('/');
		expect(res.status).toBe(200);
	});
});

afterAll(async () => {
	await mongoose.connection.close();
});
