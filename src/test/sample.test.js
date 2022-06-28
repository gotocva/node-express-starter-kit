const request = require('supertest');

import { app } from '../config/express';


describe('Space test suite', () => {
    it('tests /destinations endpoints', async() => {
        const response = await request(app).get("/space/destinations");
        console.log(response.statusCode);
        const res = await request(app).get("/");
        console.log(res.statusCode);
    });

    // Insert other tests below this line

    // Insert other tests above this line
});