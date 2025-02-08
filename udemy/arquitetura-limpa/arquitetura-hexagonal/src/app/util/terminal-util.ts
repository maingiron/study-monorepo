import { terminal } from 'terminal-kit';

export default class TerminalUtil {
  static title(text: string) {
    terminal.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta(`-`.repeat(text.length) + '\n');
  }

  static async requiredField(
    label: string,
    deafultValue: string = '',
  ): Promise<string> {
    terminal.yellow(`\n${label}: `);

    const value: string | undefined = await terminal.inputField({
      default: deafultValue,
    }).promise;

    if (value) {
      return value;
    } else {
      terminal.red('Campo obrigatório!');
      return await this.requiredField(label, deafultValue);
    }
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const returned = await terminal.singleColumnMenu(options).promise;
    return [returned.selectedIndex, returned.selectedText];
  }

  static async selection(
    text: string,
    options: string[],
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text} `);
    const result = await terminal.singleLineMenu(options).promise;
    return [result.selectedIndex, result.selectedText];
  }

  static clear() {
    terminal.clear();
  }

  static showKeyValue(key: string, value: string) {
    terminal.yellow(key).green(value).white('\n');
  }

  static async confirm(text: string): Promise<boolean> {
    terminal.yellow(`\n${text} (Sim/Não): `);
    const result = await terminal.singleColumnMenu(['Sim', 'Não']).promise;
    return result.selectedIndex === 0;
  }

  static async waitEnter(): Promise<void> {
    terminal.white('\nPressione ENTER para continuar...');
    await terminal.inputField({ echo: false }).promise;
  }

  static async sucessMessage(
    text: string,
    breakLine: boolean = true,
  ): Promise<void> {
    terminal.green((breakLine ? `\n` : '') + text);
  }

  static async errorMessage(
    text: string,
    breakLine: boolean = true,
  ): Promise<void> {
    terminal.red((breakLine ? `\n` : '') + text);
  }
}
