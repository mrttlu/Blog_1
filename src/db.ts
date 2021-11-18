import { Post } from './components/posts/interfaces';
import { User } from './components/users/interfaces';

interface Db {
  posts: Post[];
  users: User[];
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
  users: [
    {
      id: 'F0t2GWfMDWE-ooTgMmfKY',
      email: 'juku@juurikas.ee',
      password: '$2b$10$21b5RcGh6nlo08wlqXdga.7KhTEfQEfjPMcooun3Ks7yXA3LgIW.O',
    },
  ],
};

export default db;
