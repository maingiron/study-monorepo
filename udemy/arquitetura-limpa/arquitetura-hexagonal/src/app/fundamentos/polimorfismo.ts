import TerminalUtil from '../util/terminal-util';

export default async function polimorfismo() {
  TerminalUtil.title('Polimorfismo');

  const typeCar = await TerminalUtil.selection('Selecione um tipo de carro:', [
    'Ferrari',
    'Fusca',
  ]);

  while (true) {
    TerminalUtil.clear();

    const keep = await TerminalUtil.confirm('Deseja continuar?');
    if (!keep) {
      return;
    }
  }
}
