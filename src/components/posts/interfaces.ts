interface iNewPost {
  title: string;
  content: string;
  authorId: string;
}

interface iPost extends iNewPost {
  id: string;
}

export { iPost, iNewPost };
