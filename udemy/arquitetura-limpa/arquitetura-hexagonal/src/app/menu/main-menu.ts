import TerminalUtil from '@/app/utils/terminal-util';
import menuFundamentals from './menu-fundamentals';
import menuUsers from './menu-users';

export default async function mainMenu() {
  const { title, menu } = TerminalUtil;

  title('Menu Principal');

  const [indice] = await menu([
    '1. Menu Fundamentos',
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
