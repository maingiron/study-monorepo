// Na arquitetura hexagonal está interface é uma Porta!
// A porta faz parte do domínio da aplicação, e é responsável por definir um contrato que deve ser implementado por um adaptador.
// Neste caso, está interface define um contrato que deve ser implementado por um adaptador que criptografa uma senha.
export default interface ProviderPasswordCryptoPort {
  encrypt(password: string): Promise<string>;
}
