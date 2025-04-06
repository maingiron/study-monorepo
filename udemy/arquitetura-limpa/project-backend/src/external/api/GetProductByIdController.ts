import Express from 'express';
import GetProductByIdService from '@/core/products/services/GetProductById';

export default class GetProductByIdController {
  constructor(
    server: Express,
    useCase: GetProductByIdService,
    ...middlewares: any[]
  ) {
    server.get(
      '/api/products/:id',
      ...middlewares,
      async (req: any, res: any) => {
        try {
          const id: string = req.params.id;

          const product = await useCase.execute({
            id,
            user: req.user,
          });

          res.status(200).json(product);
        } catch (error: any) {
          res.status(400).json({ error: error.message });
        }
      },
    );
  }
}
