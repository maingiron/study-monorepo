import Express from 'express';
import RegisterUserService from '@/core/users/services/register-user.service';

export default class RegisterUserController {
  constructor(server: Express, useCase: RegisterUserService) {
    server.post('/api/user', async (req: any, res: any) => {
      const { name, email, password } = req.body;

      try {
        const user = await useCase.execute({ name, email, password });
        res.status(201).json(user);
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    });
  }
}
