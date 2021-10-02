import express, { Application } from 'express';
import { createPost, getAllPosts, getPostById } from './components/posts/controller';
import pingController from './components/ping/controller';
import loggerMiddleware from './components/general/middlewares';
import { titleToUppercase, createPostValidator } from './components/posts/middleware';

const app: Application = express();

const port: number = 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.get('/ping', pingController);
// Route to get all posts
app.get('/posts', getAllPosts);
// Route to get post by id
app.get('/posts/:id', getPostById);
// Route to create post
app.post('/posts', createPostValidator, titleToUppercase, createPost);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
