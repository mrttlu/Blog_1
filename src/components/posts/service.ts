import { getConnection } from 'typeorm';
import { iNewPost } from './interfaces';
import Post from './entity';
import User from '../users/entity';

const connection = getConnection();

const postsService = {
  getAllPosts: async (author: User) => {
    const posts = await connection
      .getRepository(Post)
      .find({ author });
    return posts;
  },
  getPostById: async (id: string) => {
    const post = await connection.getRepository(Post).findOne({ id });
    return post;
  },
  createPost: async (newPost: any): Promise<string> => {
    const { title, content, author } = newPost;
    const post = {
      title,
      content,
      author,
    };
    const result = await connection.getRepository(Post).save(post);
    return result.id;
  },
};

export default postsService;
