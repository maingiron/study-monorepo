import ICar from './car.interface';

export default class Fusca implements ICar {
  constructor(
    readonly maximumSpeed: number = 324,
    private _currentSpeed: number = 0,
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this.maximumSpeed, this._currentSpeed + 20);
  }

  brake(): void {
    this._currentSpeed = Math.max(0, this._currentSpeed - 20);
  }

  get currentSpeed(): number {
    return this._currentSpeed;
  }
}
