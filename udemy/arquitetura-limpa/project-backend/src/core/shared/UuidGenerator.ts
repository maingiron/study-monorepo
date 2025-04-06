import { v4 as uuid } from 'uuid';

export default class UuidGenerator {
  static generate(): string {
    return uuid();
  }
}
