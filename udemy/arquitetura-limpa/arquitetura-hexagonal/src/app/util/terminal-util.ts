import { terminal } from 'terminal-kit';

export default class TerminalUtil {
  static title(text: string) {
    terminal.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta(`-`.repeat(text.length) + '\n');
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

  static async confirm(text: string): Promise<boolean> {
    terminal.yellow(`\n${text} (Sim/Não): `);
    const result = await terminal.singleColumnMenu(['Sim', 'Não']).promise;
    return result.selectedIndex === 0;
  }
}
