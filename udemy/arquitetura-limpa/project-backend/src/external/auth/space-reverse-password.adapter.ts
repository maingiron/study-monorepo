import ProviderPasswordCryptoPort from '@/core/users/ports/provider-password-crypto.port';

export default class SpaceReversePasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    return password.split('').reverse().join(' ');
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return (await this.encrypt(password)) === hash;
  }
}
