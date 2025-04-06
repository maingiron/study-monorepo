import IUser from '@/core/users/models/IUser';

// Na arquitetura hexagonal está classe é um Adaptador!
// O adaptador NÃOOO faz parte do core (dominío) da aplicação!
// O adaptador faz parte da camada de infraestrutura da aplicação (não do core), e é responsável por implementar um contrato definido por uma porta (interface).
export default class UserRepositoryMemoryAdapter {
  private static readonly items: IUser[] = [];

  async insert(user: IUser): Promise<void> {
    const items = UserRepositoryMemoryAdapter.items;
    const userExists = await this.findByEmail(user.email);

    if (userExists) {
      return;
    }

    items.push(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const items = UserRepositoryMemoryAdapter.items;
    return items.find((user) => user.email === email) ?? null;
  }
}
