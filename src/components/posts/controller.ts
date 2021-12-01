import { Request, Response } from 'express';
import postsService from './service';
import { INewPost } from './interfaces';

// Get posts controller
const getAllPosts = async (req: Request, res: Response) => {
  // const { id } = res.locals.user;
  const posts = await postsService.getAllPosts();
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
  const usersId = res.locals.user.id;
  const { title, content } = req.body;
  const newPost: INewPost = {
    title,
    content,
    usersId,
  };
  const id = await postsService.createPost(newPost);
  return res.status(200).json({
    id,
  });
};

export { getAllPosts, getPostById, createPost };
