import { FieldPacket, ResultSetHeader } from 'mysql2';
import pool from '../../database';
import { IPost, INewPost } from './interfaces';

const postsService = {
  getAllPosts: async (): Promise<IPost[] | false> => {
    try {
      const [posts]: [IPost[], FieldPacket[]] = await pool.query(`
      SELECT P.id, P.title, P.content, P.dateCreated, P.dateUpdated, U.email
        FROM posts P
        INNER JOIN users U on P.usersId = U.id
        WHERE P.dateDeleted IS NULL;`);
      return posts;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getPostById: async (id: string): Promise<IPost | false> => {
    try {
      const [posts]: [IPost[], FieldPacket[]] = await pool.query(`
      SELECT P.id, P.title, P.content, P.dateCreated, P.dateUpdated, U.email
        FROM posts P
        INNER JOIN users U on P.usersId = U.id
        WHERE P.id = ? AND P.dateDeleted IS NULL;
      `, [id]);
      return posts[0];
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  createPost: async (newPost: INewPost): Promise<number | false> => {
    try {
      const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO posts SET ?;', [newPost]);
      return result.insertId;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default postsService;
