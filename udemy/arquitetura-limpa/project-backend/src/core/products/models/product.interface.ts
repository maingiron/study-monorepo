import IUser from '@/core/users/models/user.interface';

export default interface IProduct {
  id: string;
  name: string;
  price: number;
  consultedBy: IUser;
}
