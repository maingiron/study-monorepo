import TerminalUtil from '@/app/util/terminal-util';
import polimorfismo from '../fundamentos/polimorfismo';

export default async function menuFundamentos() {
  TerminalUtil.title('Fundamentos');

  const [indice] = await TerminalUtil.menu(['1. Poliformismo', 'Voltar']);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      return;
  }

  await menuFundamentos();
}
