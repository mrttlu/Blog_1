import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import openapi from './openapi.json';

import loggerMiddleware from './components/general/middlewares/middlewares';
import postsRouter from './components/posts/routes';
import pingRouter from './components/ping/routes';
import usersRouter from './components/users/routes';

import { login } from './components/users/controller';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

// Register ping routes
app.use('/ping', pingRouter);
// Register posts routes
app.use('/posts', postsRouter);
// Register users routes
app.use('/users', usersRouter);

app.post('/login', login);

export default app;
