import TerminalUtil from '@/app/util/terminal-util';
import registerUsers from '../users/register-users';

export default async function menuUsers() {
  const { title, menu } = TerminalUtil;

  title('Usuários');

  const [indice] = await menu(['1. Registrar Usuário', 'Voltar']);

  switch (indice) {
    case 0:
      await registerUsers();
      break;
    default:
      return;
  }

  await menuUsers();
}
