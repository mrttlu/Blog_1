interface NewPost {
  title: string;
  content: string;
  author: string;
}

interface Post extends NewPost {
  id: string;
}

export { Post, NewPost };
