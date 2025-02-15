import ProviderPasswordCryptoPort from '@/core/users/port/provider-password-crypto.port';

export default class SpaceReversePasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    return password.split('').reverse().join(' ');
  }
}
