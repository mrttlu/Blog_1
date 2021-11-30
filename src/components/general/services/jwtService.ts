import jwt from 'jsonwebtoken';
import { iUser } from '../../users/interfaces';
import config from '../../../config';

const jwtService = {
  sign: async (user: iUser):Promise<string> => {
    const payload = {
      user,
    };
    const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
    return token;
  },
  verify: async (token: string) => {
    try {
      const payload = await jwt.verify(token, config.jwtSecret);
      return payload;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default jwtService;
