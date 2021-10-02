import express, { Router } from 'express';
import { createPost, getAllPosts, getPostById } from './controller';
import { createPostValidator, titleToUppercase } from './middleware';

const router: Router = express.Router();

router
  .get('/', getAllPosts)
  .get('/:id', getPostById)
  .post('/', createPostValidator, titleToUppercase, createPost);

export default router;
