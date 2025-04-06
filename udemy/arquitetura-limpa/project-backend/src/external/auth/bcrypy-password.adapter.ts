import ProviderPasswordCryptoPort from '@/core/users/ports/provider-password-crypto.port';
import bcrypy from 'bcrypt';

// Na arquitetura hexagonal está classe é um Adaptador!
// O adaptador NÃOOOOO faz parte do core (dominío) da aplicação!
// O adaptador faz parte da camada de infraestrutura da aplicação (não do core), e é responsável por implementar um contrato definido por uma porta (interface).
export default class BcrypyPasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    const salt: string = bcrypy.genSaltSync(10);
    return bcrypy.hashSync(password, salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypy.compareSync(password, hash);
  }
}
