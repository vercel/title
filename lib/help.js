// Packages
const { yellow, grey } = require('chalk')

module.exports = `
  Usage: ${yellow('title')} [options] <input>

  Options:

    ${yellow('-h, --help')}      Show the usage information
    ${yellow('-v, --version')}   Show the version number
    ${yellow('-n, --no-copy')}   Don't copy output to clipboard
    ${yellow('-s, --special')}   Specify special words to stay as they are
`
