#!/usr/bin/env node

// Packages
import parse from 'arg'
import chalk from 'chalk'
import clipboardy from 'clipboardy'

const { red, grey, blue } = chalk

// Utilities
import pkg from '../package.json'
import title from './index.js'
import { help } from './help.js'

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
  console.log(help)
  process.exit(0)
}

const main = async () => {
  const sub = _.join(' ')

  if (!sub) {
    console.error(`${red('Error!')} Please specify an input: ${grey('title "input"')}`)
    process.exit(1)
  }

  const special = args['--special']

  const output = title(sub, { special })
  const copy = !args['--no-copy']

  if (copy) {
    try {
      await clipboardy.write(output)
    } catch (err) {
      console.error(`${red('Error!')} Could not write to clipboard`)
      process.exit(1)
    }
  }

  console.log(`${output}${copy ? ' ' + blue('[copied]') : ''}`)
}

main()
