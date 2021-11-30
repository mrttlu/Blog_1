import { getConnection } from 'typeorm';
import hashService from '../general/services/hashService';
import { iNewUser, iUser } from './interfaces';
import User from './entity';

const connection = getConnection();

const usersService = {
  createUser: async (newUser: iNewUser): Promise<string | boolean> => {
    try {
      const hashedPassword = await hashService.hash(newUser.password);
      const user = {
        ...newUser,
        password: hashedPassword,
      };
      const result = await connection.getRepository(User).save(user);
      return result.id;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getUsers: async () => {
    const users = await connection.getRepository(User).find();
    return users;
  },
  getUserByEmail: async (email: string): Promise<iUser | undefined> => {
    const user: iUser | undefined = await connection
      .getRepository(User)
      .createQueryBuilder()
      .addSelect('User.password')
      .where({ email })
      .getOne();
    return user;
  },
};

export default usersService;
