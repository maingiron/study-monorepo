export default class Id {
  static generate(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
