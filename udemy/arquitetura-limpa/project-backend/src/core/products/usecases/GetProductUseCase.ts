import IUseCase from '@/core/shared/IUseCase';
import IProduct from '../models/IProduct';
import IUser from '@/core/users/models/IUser';

export type input = {
  id: string;
  user: IUser;
};

export default class GetProductUseCase implements IUseCase<input, IProduct> {
  async execute(input: input): Promise<IProduct> {
    const mock: IProduct = {
      id: input.id,
      name: 'Product Name Mock',
      price: 100,
      consultedBy: input.user,
    };

    return mock;
  }
}
