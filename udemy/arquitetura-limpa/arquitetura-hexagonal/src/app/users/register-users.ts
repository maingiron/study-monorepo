import IUser from '@/core/users/models/user.interface';
import TerminalUtil from '../utils/terminal-util';
import RegisterUserService from '@/core/users/services/register-user.service';
import BcrypyPasswordAdapter from '@/adapters/auth/bcrypy-password.adapter';
import RepositoryMemoryAdapter from '@/adapters/db/repository-memory.adapter';

export default async function registerUsers() {
  const { title, requiredField, sucess, waitEnter, error } = TerminalUtil;

  title('Registrar Usuário');

  const name = await requiredField('Nome', 'Raphael Giron');
  const email = await requiredField('E-mail', 'giron@email.com');
  const password = await requiredField('Senha', 'abcd1234');

  const user: IUser = { name, email, password };

  try {
    const repo = new RepositoryMemoryAdapter();

    // const providerPassword = new ReversePasswordAdapter();
    // const providerPassword = new SpaceReversePasswordAdapter();
    const providerPassword = new BcrypyPasswordAdapter();

    const useCase = new RegisterUserService(repo, providerPassword);

    await useCase.execute(user);

    sucess('Usuário registrado com sucesso!');

    await waitEnter();

    await useCase.execute(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    error(e.message);
  } finally {
    await waitEnter();
  }
}
