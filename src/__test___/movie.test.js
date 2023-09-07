const request = require('supertest');
const MovieRouter = require('../routes/movie/index');
const TestHelper = require('./test_helper');

let server;

describe('Movie ', function () {
  beforeAll(() => {
      server = TestHelper.createTestServer('/', MovieRouter);
  });

  afterAll(async () => {
      await server.close();
  });

  test('It should return status response 200: Successfully GET All Movie List', async () => {
    const response = await request(server)
    .get('/movie')
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    })
  });


});