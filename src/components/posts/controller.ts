import { Request, Response } from 'express';
import postsService from './service';
import { Post, NewPost } from './interfaces';

// Get posts controller
const getAllPosts = (req: Request, res: Response) => {
  const { id } = res.locals.user;
  const posts: Post[] = postsService.getAllPosts(id);
  return res.status(200).json({
    posts,
  });
};

// Get post by id controller
const getPostById = (req: Request, res: Response) => {
  const { id } = req.params;
  const post = postsService.getPostById(id);
  if (!post) {
    return res.status(400).json({
      messsage: `No post exists with id: ${id}`,
    });
  }
  return res.status(200).json({
    post,
  });
};

// Create post controller
const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const newPost: NewPost = {
    title,
    content,
    author,
  };
  const id: string = postsService.createPost(newPost);
  return res.status(200).json({
    id,
  });
};

export { getAllPosts, getPostById, createPost };
