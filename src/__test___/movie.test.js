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

  test('It should return status response 200: Successfully GET Movie By ID', async () => {
    const response = await request(server)
    .get('/movie/2')
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    })
  });

  test('It should return status response 200: Successfully Add Movie', async () => {
    const payload = {
      title: 'Ayat Cinta 2',
      description: 'Ayat Cinta Bercerita',
      rating: 9,
      image: 'https'
    }
    const response = await request(server)
    .post('/movie')
    .send(payload)
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    })
  });

  test('It should return status response 200: Successfully Update Movie', async () => {
    const payload = {
      title: 'Koala Kumal',
      description: 'Koala Kumal by Raditya Dika',
      rating: 9,
      image: 'https'
    }
    const response = await request(server)
    .patch('/movie/3')
    .send(payload)
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    })
  });

  test('It should return status response 200: Successfully Delete Movie', async () => {
    const response = await request(server)
    .delete('/movie/4')
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    })
  }); 
});