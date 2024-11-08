import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { app } from './server';

dotenv.config({ path: '.env.test' });

let token;

beforeAll(() => {
    const payload = {
        name: 'admin',
    };
    const secret = process.env.TEST_SECRET || 'default_secret';
    token = jwt.sign(payload, secret, { expiresIn: '1h' });
});

describe('API Routes', () => {
	it(`GET /api/health should return health status`, async () => {
		const res = await request(app)
			.get("/api/health")
		expect(res.statusCode).toBe(200);
		expect(res.body).toHaveProperty('status', 'ok');
	});
});
