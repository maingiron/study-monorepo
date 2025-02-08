import IUser from '../models/user.interface';

export default class RepositoryUsersMemory {
  private static readonly items: IUser[] = [];

  async insert(user: IUser): Promise<void> {
    const items = RepositoryUsersMemory.items;
    const userExists = await this.findByEmail(user.email);

    if (userExists) {
      return;
    }

    items.push(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const items = RepositoryUsersMemory.items;
    return items.find((user) => user.email === email) ?? null;
  }
}
