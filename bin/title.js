#!/usr/bin/env node

// Packages
import parse from 'arg';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import pkg from '../package.json' assert { type: 'json' };
import convert from '../lib/index.js';
import { helpText } from '../lib/help.js';

// Parse the supplied commands and options
const { _, ...args } = parse({
  '--version': Boolean,
  '--help': Boolean,
  '--no-copy': Boolean,
  '--special': [String],
  '-v': '--version',
  '-h': '--help',
  '-n': '--no-copy',
  '-s': '--special'
})

// Output the package's version if
// the `--version was supplied
if (args['--version']) {
  console.log(pkg.version)
  process.exit(0)
}

if (args['--help']) {
  console.log(helpText)
  process.exit(0)
}

const main = async () => {
  const sub = _.join(' ')

  if (!sub) {
    console.error(`${chalk.red('Error!')} Please specify an input: ${chalk.grey('title "input"')}`)
    process.exit(1)
  }

  const specials = args['--special']

  const output = convert(sub, { specials })
  const copy = !args['--no-copy']

  if (copy) {
    try {
      await clipboardy.write(output)
    } catch (err) {
      console.error(`${chalk.red('Error!')} Could not write to clipboard`)
      process.exit(1)
    }
  }

  console.log(`${output}${copy ? ' ' + chalk.blue('[copied]') : ''}`)
}

main()
