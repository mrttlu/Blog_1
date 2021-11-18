import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import openapi from './openapi.json';

import loggerMiddleware from './components/general/middlewares/middlewares';
import postsRouter from './components/posts/routes';
import pingRouter from './components/ping/routes';
import usersRouter from './components/users/routes';

import { login } from './components/users/controller';
import isLoggedIn from './components/general/middlewares/isLoggedIn';

const app: Application = express();

const port: number = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

// Register ping routes
app.use('/ping', pingRouter);
// Register posts routes
app.use('/posts', isLoggedIn, postsRouter);
// Register users routes
app.use('/users', usersRouter);

app.post('/login', login);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
