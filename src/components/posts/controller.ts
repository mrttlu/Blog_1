import { Request, Response } from 'express';
import postsService from './service';
import { iNewPost } from './interfaces';

// Get posts controller
const getAllPosts = async (req: Request, res: Response) => {
  const { user } = res.locals.user;
  const posts = await postsService.getAllPosts(user);
  return res.status(200).json({
    posts,
  });
};

// Get post by id controller
const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postsService.getPostById(id);
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
const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const { user } = res.locals.user;
  const newPost = {
    title,
    content,
    author: user,
  };
  const postId: string = await postsService.createPost(newPost);
  return res.status(200).json({
    id: postId,
  });
};

export { getAllPosts, getPostById, createPost };
