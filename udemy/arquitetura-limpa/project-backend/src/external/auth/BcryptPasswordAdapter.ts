import ProviderPasswordCryptoPort from '@/core/users/ports/ProviderPasswordCryptoPort';
import bcrypt from 'bcrypt';

// Na arquitetura hexagonal está classe é um Adaptador!
// O adaptador NÃOOO faz parte do core (dominío) da aplicação!
// O adaptador faz parte da camada de infraestrutura da aplicação (não do core), e é responsável por implementar um contrato definido por uma porta (interface).
export default class BcryptPasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash);
  }
}
