import TerminalUtil from '@/util/terminal-util';
import { terminal } from 'terminal-kit';
import menuFundamentos from './menu-fundamentos';

export default async function menuPrincipal() {
  TerminalUtil.title('Menu Principal');

  const returned = await terminal.singleColumnMenu(['1. Fundamentos', 'Sair'])
    .promise;

  switch (returned.selectedIndex) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      process.exit(0);
  }

  menuPrincipal();
}
