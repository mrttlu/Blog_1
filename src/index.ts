import express, { Request, Response, Application } from 'express';
import { nanoid } from 'nanoid';

const app: Application = express();

const port: number = 3000;

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface Db {
  posts: Post[];
}

const db: Db = {
  posts: [
    {
      id: 'qwert',
      title: 'Esimene postitus',
      content: 'Tähtis postitus',
      author: 'Mrt',
    },
    {
      id: 'asdf',
      title: 'Teine postitus',
      content: 'Vähemtähtis postitus',
      author: 'Mrt',
    },
  ],
};

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => res.status(200).json({
  message: 'Alive',
}));

app.get('/posts', (req: Request, res: Response) => {
  const { posts } = db;

  return res.status(200).json({
    posts,
  });
});

app.get('/posts/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const post = db.posts.find((element: Post) => element.id === id);
  if (!post) {
    return res.status(400).json({
      messsage: `No post exists with id: ${id}`,
    });
  }
  return res.status(200).json({
    post,
  });
});

app.post('/posts', (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const id = nanoid();
  const post: Post = {
    id,
    title,
    content,
    author,
  };
  db.posts.push(post);
  return res.status(200).json({
    id: post.id,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
