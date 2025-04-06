export default interface IUseCase<input, output> {
  execute(args: input): Promise<output>;
}
