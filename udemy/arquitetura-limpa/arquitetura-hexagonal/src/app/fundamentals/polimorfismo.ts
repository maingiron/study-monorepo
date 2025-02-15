import ICar from '@/core/fundamentals/car.interface';
import TerminalUtil from '../utils/terminal-util';
import Ferrari from '@/core/fundamentals/ferrari';
import Fusca from '@/core/fundamentals/fusca';

export default async function polimorfismo() {
  const { title, selection, clear, showKeyValue, confirm } = TerminalUtil;

  title('Polimorfismo');

  const [typeCar] = await selection('Selecione um tipo de carro:', [
    'Ferrari',
    'Fusca',
  ]);

  const car: ICar = typeCar === 0 ? new Ferrari() : new Fusca();

  while (true) {
    clear();

    showKeyValue('Velocidade Máxima: ', `${car.maximumSpeed} km/h`);

    showKeyValue('Velocidade Atual: ', `${car.currentSpeed} km/h`);

    const [options] = await selection('Escolha uma opção:', [
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
