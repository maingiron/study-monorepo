import IUser from '@/core/users/models/user.interface';

export default class RepositoryMemoryAdapter {
  private static readonly items: IUser[] = [];

  async insert(user: IUser): Promise<void> {
    const items = RepositoryMemoryAdapter.items;
    const userExists = await this.findByEmail(user.email);

    if (userExists) {
      return;
    }

    items.push(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const items = RepositoryMemoryAdapter.items;
    return items.find((user) => user.email === email) ?? null;
  }
}
