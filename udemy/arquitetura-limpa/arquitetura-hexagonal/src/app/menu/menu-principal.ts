import TerminalUtil from '@/app/util/terminal-util';
import menuFundamentos from './menu-fundamentos';

export default async function menuPrincipal() {
  TerminalUtil.title('Menu Principal');

  const [indice] = await TerminalUtil.menu(['1. Fundamentos', 'Sair']);

  switch (indice) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      process.exit(0);
  }

  menuPrincipal();
}
