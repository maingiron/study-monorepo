import TerminalUtil from '@/app/util/terminal-util';
import menuFundamentals from './menu-fundamentals';
import menuUsers from './menu-users';

export default async function mainMenu() {
  TerminalUtil.title('Menu Principal');

  const [indice] = await TerminalUtil.menu([
    '1. Fundamentos',
    '2. Menu Usuários',
    'Sair',
  ]);

  switch (indice) {
    case 0:
      await menuFundamentals();
      break;
    case 1:
      await menuUsers();
      break;
    default:
      process.exit(0);
  }

  mainMenu();
}
