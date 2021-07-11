const request = require('supertest');
const app = require('../src/app');

const { products } = require('../src/data/project-1/data');

describe('Project 1', () => {
  describe('Products', () => {
    it('should get all products', async () => {
      const res = await request(app)
        .get('/project-1/products')
        .send()
        .expect(200);
      expect(res.body.length).toEqual(products.length);
    });
  });
});
