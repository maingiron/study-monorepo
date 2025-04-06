import IUseCase from '@/core/shared/IUseCase';
import IUser from '../models/IUser';
import UserRepositoryMemoryAdapter from '@/external/db/UserRepositoryMemoryAdapter';
import ErrorsEnum from '@/core/shared/ErrorsEnum';
import ProviderPasswordCryptoPort from '../ports/ProviderPasswordCryptoPort';

export type input = {
  email: string;
  password: string;
};

export default class LoginUserUseCase implements IUseCase<input, IUser> {
  constructor(
    private repo: UserRepositoryMemoryAdapter,
    private providerCrypto: ProviderPasswordCryptoPort,
  ) {}

  async execute(args: input): Promise<IUser> {
    const { email, password } = args;

    const user: IUser | null = await this.repo.findByEmail(email);

    if (!user) {
      throw new Error(ErrorsEnum.USER_NOT_FOUND);
    }

    const isPasswordValid: boolean = await this.providerCrypto.compare(
      password,
      user.password!,
    );

    if (!isPasswordValid) {
      throw new Error(ErrorsEnum.USER_PASSWORD_INVALID);
    }

    return { ...user, password: undefined }; // Exclude password from the output
  }
}
