import express, { Router } from 'express';
import { createPost, getAllPosts, getPostById } from './controller';
import { createPostValidator, titleToUppercase } from './middleware';

import isLoggedIn from '../general/middlewares/isLoggedIn';

const router: Router = express.Router();

router
  .get('/', getAllPosts)
  .get('/:id', getPostById)
  .post('/', isLoggedIn, createPostValidator, titleToUppercase, createPost);

export default router;
