import ProviderPasswordCryptoPort from '@/core/users/port/provider-password-crypto.port';

// Na arquitetura hexagonal está classe é um Adaptador!
// O adaptador faz parte da camada de infraestrutura da aplicação (não do core), e é responsável por implementar um contrato definido por uma porta.
export default class ReversePasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    return password.split('').reverse().join('');
  }
}
