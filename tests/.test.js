const request = require('supertest');
const app = require('../server'); // Adjust the path to your server.js file

// Your test cases here


describe('Get User', () => {
    // ...
  
    it('should return an error if user is not found', async () => {
      const nonExistentUserId = '60cde0a28f8d0f3a0e5c9c3f'; // Replace with a valid user ID from your database
  
      await request(app)
        .get(`/users/${nonExistentUserId}`)
        .expect(404)
        .then((response) => {
          expect(response.body.message).toBe('User not found');
        });
    });
  
    // ...
  });
  describe('Get User', () => {
    // ...
  
    it('should return an error if user is not found', async () => {
      const nonExistentUserId = '60cde0a28f8d0f3a0e5c9c3f'; // Replace with a valid user ID from your database
  
      await request(app)
        .get(`/users/${nonExistentUserId}`)
        .expect(404)
        .then((response) => {
          expect(response.body.message).toBe('User not found');
        });
    });
  
    // ...
  });
    