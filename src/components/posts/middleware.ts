import { Request, Response, NextFunction } from 'express';

const createPostValidator = (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  if (!title) {
    return res.status(400).json({
      messsage: 'No post title provided!',
    });
  }
  if (!content) {
    return res.status(400).json({
      messsage: 'No post content provided!',
    });
  }
  return next();
};

const titleToUppercase = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;
  const uppercaseTitle = title.toUpperCase();
  req.body.title = uppercaseTitle;
  return next();
};

export { createPostValidator, titleToUppercase };
