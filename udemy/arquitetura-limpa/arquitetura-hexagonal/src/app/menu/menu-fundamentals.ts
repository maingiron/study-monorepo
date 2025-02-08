import TerminalUtil from '@/app/util/terminal-util';
import polimorfismo from '../fundamentals/polimorfismo';
import dip from '../fundamentals/dip';

export default async function menuFundamentals() {
  TerminalUtil.title('Fundamentos');

  const [indice] = await TerminalUtil.menu([
    '1. Polimorfismo',
    '2. DIP - Dependency Inversion Principle',
    'Voltar',
  ]);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    default:
      return;
  }

  await menuFundamentals();
}
