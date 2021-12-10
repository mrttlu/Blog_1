import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

let token: string;

const user = {
  email: 'juku@juurikas.ee',
  password: 'juku',
};

const newPost = {
  title: 'Pealkiri',
  content: 'Sisu',
};

describe('Posts controller', () => {
  describe('POST /login', () => {
    it('responds with status 200 and token', async () => {
      const response = await request(app).post('/login').send(user);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.token).to.be.a('string');
      token = response.body.token;
    });
  });
  describe('GET /posts', () => {
    it('responds with status 200 and posts array', async () => {
      const response = await request(app).get('/posts');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.posts).to.be.a('array');
      expect(response.body.posts.length).to.be.gt(0);
    });
  });
  describe('POST /posts', () => {
    it('responds with status 401 and error message because of missing token', async () => {
      const response = await request(app).post('/posts').send(newPost);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
    });
  });
  describe('POST /posts', () => {
    it('responds with status 201 and id of created post', async () => {
      const response = await request(app)
        .post('/posts')
        .send(newPost)
        .set('Authorization', `Bearer ${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body.id).to.be.a('number');
    });
  });
});
