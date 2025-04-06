import IUseCase from '@/core/shared/use-case.inteface';
import Errors from '@/core/shared/errors.enum';
import Id from '@/core/shared/id';
import IUser from '../models/user.interface';
import RepositoryUserPort from '../ports/repository-user.port';
import ProviderPasswordCryptoPort from '../ports/provider-password-crypto.port';

export default class RegisterUserService implements IUseCase<IUser, void> {
  constructor(
    private repo: RepositoryUserPort,
    private provider: ProviderPasswordCryptoPort,
  ) {}

  async execute(user: IUser): Promise<void> {
    const criptoPassword = await this.provider.encrypt(user.password);

    const userExists = await this.repo.findByEmail(user.email);

    if (userExists) {
      throw new Error(Errors.USER_ALREADY_EXISTS);
    }

    const newUser: IUser = {
      id: Id.generate(),
      name: user.name,
      email: user.email,
      password: criptoPassword,
    };

    this.repo.insert(newUser);

    console.log(`\n\n${JSON.stringify(newUser)}\n\n`);
  }
}
