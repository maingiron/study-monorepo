import Express from 'express';
import LoginUserService from '@/core/users/services/login-user.service';
import JwtProvider from './JwtProvider';

export default class LoginUserController {
  constructor(server: Express, useCase: LoginUserService) {
    server.post('/api/login', async (req: any, res: any) => {
      const { email, password } = req.body;

      try {
        const user = await useCase.execute({ email, password });
        const jwtProvider = new JwtProvider(process.env.JWT_SECRET!);

        res.status(200).json({
          user,
          token: jwtProvider.sign(user),
        });
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    });
  }
}
