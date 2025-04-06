export default interface ICar {
  readonly maximumSpeed: number;
  readonly currentSpeed: number;
  accelerate(): void;
  brake(): void;
}
