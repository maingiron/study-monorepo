import IUser from '../models/user.interface';

export default interface RepositoryUserPort {
  insert(user: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
}
