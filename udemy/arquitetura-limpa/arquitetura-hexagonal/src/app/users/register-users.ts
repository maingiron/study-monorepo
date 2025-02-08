import IUser from '@/core/users/models/user.interface';
import TerminalUtil from '../util/terminal-util';
import RegisterUserService from '@/core/users/services/register-user.service';

export default async function registerUsers() {
  TerminalUtil.title('Registrar Usuário');

  const name = await TerminalUtil.requiredField('Nome', 'Raphael Giron');
  const email = await TerminalUtil.requiredField('E-mail', 'giron@email.com');
  const password = await TerminalUtil.requiredField('Senha', 'abcd1234');

  const user: IUser = { name, email, password };

  await new RegisterUserService().execute(user);

  TerminalUtil.sucessMessage('Usuário registrado com sucesso!');

  await TerminalUtil.waitEnter();

  try {
    await new RegisterUserService().execute(user);
  } catch (e: any) {
    TerminalUtil.errorMessage(e.message);
  } finally {
    await TerminalUtil.waitEnter();
  }
}
