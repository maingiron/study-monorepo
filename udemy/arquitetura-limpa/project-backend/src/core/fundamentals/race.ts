import ICar from './car.interface';

export default function race(
  car: ICar,
  logger: (str: string) => void = console.log,
) {
  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();
    logger(`\n Velocidade atual: ${car.currentSpeed}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.brake();
    logger(`\n Velocidade atual: ${car.currentSpeed}`);
  });
}
