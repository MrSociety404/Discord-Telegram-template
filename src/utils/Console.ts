import config from '../config';
import chalk from 'chalk';

export class Console {
  static primary(message: string) {
    console.log(chalk.bgCyan(` ${config.name} | ${message}`));
  }

  static log(message: string) {
    console.log(chalk.bgMagenta(` ${config.name} | ${message}`));
  }

  static warning(message: string) {
    console.log(chalk.bgYellow(` ${config.name} | ${message}`));
  }

  static error(message: string) {
    console.log(chalk.bgRed(` ${config.name} | ${message}`));
  }
}
