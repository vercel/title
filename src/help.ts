// Packages
import { styleText } from 'node:util'

export const help = `
  Usage: ${styleText('yellow', 'title')} [options] <input>

  Options:

    ${styleText('yellow', '-h, --help')}      Show the usage information
    ${styleText('yellow', '-v, --version')}   Show the version number
    ${styleText('yellow', '-s, --special')}   Words to capitalize as they are passed
    ${styleText('yellow', '-n, --no-copy')}   Don't copy output to clipboard
`
