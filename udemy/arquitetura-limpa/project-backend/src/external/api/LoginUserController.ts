import Express from 'express';
import LoginUserUseCase from '@/core/users/usecases/LoginUserUseCase';
import JwtProvider from './jwt/JwtProvider';

export default class LoginUserController {
  constructor(server: Express, useCase: LoginUserUseCase) {
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
