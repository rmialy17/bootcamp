import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.green('Hello world!'));
console.log(chalk.red('Hello world!'));
// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));