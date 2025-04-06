import IUseCase from '@/core/shared/IUseCase';
import ErrorsEnum from '@/core/shared/ErrorsEnum';
import UuidGenerator from '@/core/shared/UuidGenerator';
import IUser from '../models/IUser';
import UserRepositoryPort from '../ports/UserRepositoryPort';
import ProviderPasswordCryptoPort from '../ports/ProviderPasswordCryptoPort';

export default class RegisterUserUseCase implements IUseCase<IUser, void> {
  constructor(
    private repo: UserRepositoryPort,
    private provider: ProviderPasswordCryptoPort,
  ) {}

  async execute(user: IUser): Promise<IUser> {
    const criptoPassword: string = await this.provider.encrypt(user.password!);

    const userExists: IUser | null = await this.repo.findByEmail(user.email);

    if (userExists) {
      throw new Error(ErrorsEnum.USER_ALREADY_EXISTS);
    }

    const newUser: IUser = {
      id: UuidGenerator.generate(),
      name: user.name,
      email: user.email,
      password: criptoPassword,
    };

    this.repo.insert(newUser);

    console.log(`\n📌 New user: ${JSON.stringify(newUser)}\n`);

    return newUser;
  }
}
