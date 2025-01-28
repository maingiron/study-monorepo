import ICar from '@/core/fundamentos/car.interface';
import TerminalUtil from '../util/terminal-util';
import Ferrari from '@/core/fundamentos/ferrari';
import Fusca from '@/core/fundamentos/fusca';

export default async function polimorfismo() {
  TerminalUtil.title('Polimorfismo');

  const [typeCar] = await TerminalUtil.selection(
    'Selecione um tipo de carro:',
    ['Ferrari', 'Fusca'],
  );

  const car: ICar = typeCar === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.clear();

    TerminalUtil.showKeyValue(
      'Velocidade Máxima: ',
      `${car.maximumSpeed} km/h`,
    );

    TerminalUtil.showKeyValue('Velocidade Atual: ', `${car.currentSpeed} km/h`);

    const [options] = await TerminalUtil.selection('Escolha uma opção:', [
      'Acelerar',
      'Frear',
    ]);

    options === 0 ? car.accelerate() : car.brake();

    const keep = await TerminalUtil.confirm('Deseja continuar?');
    if (!keep) {
      return;
    }
  }
}
