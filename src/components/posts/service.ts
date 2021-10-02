import { nanoid } from 'nanoid';
import db from '../../db';
import { Post, NewPost } from './interfaces';

const postsService = {
  getAllPosts: () => {
    const { posts } = db;
    return posts;
  },
  getPostById: (id: string): Post | undefined => {
    const post: Post | undefined = db.posts.find((element: Post) => element.id === id);
    return post;
  },
  createPost: (newPost: NewPost): string => {
    const { title, content, author } = newPost;
    const id = nanoid();
    const post: Post = {
      id,
      title,
      content,
      author,
    };
    db.posts.push(post);
    return id;
  },
};

export default postsService;
