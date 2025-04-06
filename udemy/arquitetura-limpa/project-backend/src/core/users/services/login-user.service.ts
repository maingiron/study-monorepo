import IUseCase from '@/core/shared/use-case.inteface';
import IUser from '../models/user.interface';
import RepositoryMemoryAdapter from '@/external/db/repository-memory.adapter';
import Errors from '@/core/shared/errors.enum';
import ProviderPasswordCryptoPort from '../ports/provider-password-crypto.port';

export type input = {
  email: string;
  password: string;
};

export default class LoginUserService implements IUseCase<input, IUser> {
  constructor(
    private repo: RepositoryMemoryAdapter,
    private providerCrypto: ProviderPasswordCryptoPort,
  ) {}

  async execute(args: input): Promise<IUser> {
    const { email, password } = args;

    const user = await this.repo.findByEmail(email);

    if (!user) {
      throw new Error(Errors.USER_NOT_FOUND);
    }

    const isPasswordValid = await this.providerCrypto.compare(
      password,
      user.password!,
    );

    if (!isPasswordValid) {
      throw new Error(Errors.USER_PASSWORD_INVALID);
    }

    return { ...user, password: undefined }; // Exclude password from the output
  }
}
