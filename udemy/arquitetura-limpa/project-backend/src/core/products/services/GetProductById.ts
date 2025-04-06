import IUseCase from '@/core/shared/use-case.inteface';
import IProduct from '../models/product.interface';
import IUser from '@/core/users/models/user.interface';

export type input = {
  id: string;
  user: IUser;
};

export default class GetProductByIdService
  implements IUseCase<input, IProduct>
{
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
