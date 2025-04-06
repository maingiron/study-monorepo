import ProviderPasswordCryptoPort from '@/core/users/ports/ProviderPasswordCryptoPort';

// Na arquitetura hexagonal está classe é um Adaptador!
// O adaptador NÃOOO faz parte do core (dominío) da aplicação!
// O adaptador faz parte da camada de infraestrutura da aplicação (não do core), e é responsável por implementar um contrato definido por uma porta (interface).
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
