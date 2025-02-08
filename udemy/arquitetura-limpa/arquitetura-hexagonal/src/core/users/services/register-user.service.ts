import IUseCase from '@/core/shared/use-case.inteface';
import IUser from '../models/user.interface';
import RepositoryUsersMemory from './repository-users-memory';
import Errors from '@/core/shared/errors.enum';
import Id from '@/core/shared/id';

export default class RegisterUserService implements IUseCase<IUser, void> {
  async execute(user: IUser): Promise<void> {
    const criptoPassword = user.password.split('').reverse().join('');

    const repo = new RepositoryUsersMemory();

    const userExists = await repo.findByEmail(user.email);

    if (userExists) {
      throw new Error(Errors.USER_ALREADY_EXISTS);
    }

    const newUser: IUser = {
      id: Id.generate(),
      name: user.name,
      email: user.email,
      password: criptoPassword,
    };

    repo.insert(newUser);

    console.log(`\n\n${JSON.stringify(newUser)}\n\n`);
  }
}
