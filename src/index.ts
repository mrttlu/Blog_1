import express, { Application } from 'express';
import loggerMiddleware from './components/general/middlewares';
import postsRouter from './components/posts/routes';
import pingRouter from './components/ping/routes';

const app: Application = express();

const port: number = 3000;

app.use(express.json());
app.use(loggerMiddleware);
// Register ping routes
app.use('/ping', pingRouter);
// Register posts routes
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
