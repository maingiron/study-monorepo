import GetProductUseCase from '@/core/products/usecases/GetProductUseCase';
import Express from 'express';

export default class GetProductController {
  constructor(
    server: Express,
    useCase: GetProductUseCase,
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
