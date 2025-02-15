import ProviderPasswordCryptoPort from '@/core/users/port/provider-password-crypto.port';
import bcrypy from 'bcrypt';

export default class BcrypyPasswordAdapter
  implements ProviderPasswordCryptoPort
{
  async encrypt(password: string): Promise<string> {
    const salt: string = bcrypy.genSaltSync(10);
    return bcrypy.hashSync(password, salt);
  }
}
