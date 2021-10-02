import { Post } from './components/posts/interfaces';

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

export default db;
