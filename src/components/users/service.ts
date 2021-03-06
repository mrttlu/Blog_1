import { FieldPacket, ResultSetHeader } from 'mysql2';
import hashService from '../general/services/hashService';
import { INewUser, IUser } from './interfaces';
import pool from '../../database';

const usersService = {
  createUser: async (newUser: INewUser):Promise<number | false> => {
    try {
      const hashedPassword = await hashService.hash(newUser.password);
      const user: INewUser = {
        ...newUser,
        password: hashedPassword,
      };
      const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('INSERT INTO users SET ?;', [user]);
      return result.insertId;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getUsers: async (): Promise<IUser[]> => {
    const [users]: [IUser[], FieldPacket[]] = await pool.query('SELECT id, email, dateCreated, dateUpdated FROM users WHERE dateDeleted IS NULL;');
    return users;
  },
  getUserByEmail: async (email: string): Promise<IUser | false> => {
    try {
      const [users]: [IUser[], FieldPacket[]] = await pool.query('SELECT * FROM users WHERE email = ? AND dateDeleted IS NULL', [email]);
      return users[0];
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default usersService;
