import TerminalUtil from '@/app/utils/terminal-util';
import polimorfismo from '../fundamentals/polimorfismo';
import dip from '../fundamentals/dip';

export default async function menuFundamentals() {
  const { title, menu } = TerminalUtil;

  title('Fundamentos');

  const [indice] = await menu([
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
