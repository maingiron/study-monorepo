import race from '@/core/fundamentals/race';
import TerminalUtil from '../util/terminal-util';
import { terminal } from 'terminal-kit';
import ICar from '@/core/fundamentals/car.interface';
import Ferrari from '@/core/fundamentals/ferrari';
import Fusca from '@/core/fundamentals/fusca';

export default async function dip() {
  const { title, selection, waitEnter } = TerminalUtil;

  title('Dependency Inversion Principle');

  const [typeCar] = await selection('Selecione um tipo de carro:', [
    'Ferrari',
    'Fusca',
  ]);

  const car: ICar = typeCar === 0 ? new Ferrari() : new Fusca();

  race(car, terminal.gray);
  //   race(car); // isso funciona também

  await waitEnter();
}
