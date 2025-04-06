import IUser from '../models/IUser';

// Na arquitetura hexagonal está interface é uma Porta!
// A porta faz parte do domínio da aplicação, e é responsável por definir um contrato que deve ser implementado por um adaptador.
// Neste caso, está interface define um contrato que deve ser implementado por um adaptador que interage com o banco de dados para persistir um usuário.
// O adaptador é responsável por implementar a lógica de persistência, enquanto a porta define o contrato que deve ser seguido pelo adaptador.
export default interface UserRepositoryPort {
  insert(user: IUser): Promise<void>;
  findByEmail(email: string): Promise<IUser | null>;
}
