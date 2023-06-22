const request = require('supertest');
const app = require('../server');

describe('Server Endpoints', () => {
  it('should get all blog posts', async () => {
    const token = 'kvlivliyfjv65'; // Replace with a valid JWT token
    const res = await request(app)
      .get('/api/blogPosts')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    // Add more assertions as needed
  });
});
