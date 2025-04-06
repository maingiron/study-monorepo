import { Request, Response, NextFunction } from 'express';
import RepositoryMemoryAdapter from '../db/repository-memory.adapter';
import JwtProvider from './JwtProvider';
import IUser from '@/core/users/models/user.interface';

export default function UserMiddleware(repo: RepositoryMemoryAdapter) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Authorization header is missing' });
    }

    try {
      const jwtProvider = new JwtProvider(process.env.JWT_SECRET!);
      const userToken = jwtProvider.verify(token) as IUser;

      const user = await repo.findByEmail(userToken.email);

      if (!user) {
        return res.status(403).json({ error: 'Forbidden' });
      }

      // add user to request object
      (req as any).user = user;
      (req as any).user.password = undefined;

      next();
    } catch (error: any) {
      return res.status(403).json({ error: 'Forbidden' });
    }
  };
}
