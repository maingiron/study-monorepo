import TerminalUtil from '@/app/util/terminal-util';
import menuFundamentals from './menu-fundamentals';

export default async function mainMenu() {
  TerminalUtil.title('Menu Principal');

  const [indice] = await TerminalUtil.menu(['1. Fundamentos', 'Sair']);

  switch (indice) {
    case 0:
      await menuFundamentals();
      break;
    case 1:
      process.exit(0);
  }

  mainMenu();
}
