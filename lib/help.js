// Packages
import chalk from 'chalk';

export const helpText = `
  Usage: ${chalk.yellow('title')} [options] <input>

  Options:

    ${chalk.yellow('-h, --help')}      Show the usage information
    ${chalk.yellow('-v, --version')}   Show the version number
    ${chalk.yellow('-s, --special')}   Words to capitalize as they are passed
    ${chalk.yellow('-n, --no-copy')}   Don't copy output to clipboard
`;
