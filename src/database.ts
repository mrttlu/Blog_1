import 'reflect-metadata';
import { createConnection } from 'typeorm';
import User from './components/users/entity';
import Post from './components/posts/entity';
import config from './config';

const { db } = config;
createConnection({
  type: 'mysql',
  host: db.host,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [User, Post],
  synchronize: true,
  logging: false,
}).then((connection) => {
  console.log(`Database connected to ${connection.name}`);
}).catch((error) => {
  console.log(error);
});

export default createConnection;
