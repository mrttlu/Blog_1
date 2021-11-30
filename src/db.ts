import { iPost } from './components/posts/interfaces';
import { iUser } from './components/users/interfaces';

interface iDb {
  posts: iPost[];
  users: iUser[];
}

const db: iDb = {
  posts: [
    {
      id: 'qwert',
      title: 'Esimene postitus',
      content: 'Tähtis postitus',
      authorId: 'F0t2GWfMDWE-ooTgMmfKY',
    },
    {
      id: 'asas',
      title: 'Esimene postitus',
      content: 'Tähtis postitus',
      authorId: 'F0t2GWfMDWE-ooTgMmfKY',
    },
    {
      id: 'asdf',
      title: 'Teine postitus',
      content: 'Vähemtähtis postitus',
      authorId: 'f989aa95-592e-41f6-ad8e-a89085300e33',
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
