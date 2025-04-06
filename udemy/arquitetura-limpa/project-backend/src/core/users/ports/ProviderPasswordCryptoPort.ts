// Na arquitetura hexagonal está interface é uma Porta!
// A porta faz parte do domínio da aplicação, e é responsável por definir um contrato que deve ser implementado por um adaptador.
// Neste caso, está interface define um contrato que deve ser implementado por um adaptador que criptografa uma senha.
// O adaptador é responsável por implementar a lógica de criptografia, enquanto a porta define o contrato que deve ser seguido pelo adaptador.
export default interface ProviderPasswordCryptoPort {
  encrypt(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}
