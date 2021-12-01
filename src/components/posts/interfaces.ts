import { RowDataPacket } from 'mysql2';

interface INewPost {
  title: string;
  content: string;
  usersId: number;
}

interface IPost extends INewPost, RowDataPacket {
  id: number;
}

export { IPost, INewPost };
