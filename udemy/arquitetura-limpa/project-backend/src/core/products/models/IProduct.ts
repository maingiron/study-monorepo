import IUser from '@/core/users/models/IUser';

export default interface IProduct {
  id: string;
  name: string;
  price: number;
  consultedBy: IUser;
}
