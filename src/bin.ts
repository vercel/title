#!/usr/bin/env node

// Packages
import { parseArgs } from 'node:util'
import chalk from 'chalk'
import clipboardy from 'clipboardy'

const { red, grey, blue } = chalk

// Utilities
import pkg from '../package.json'
import title from './index.js'
import { help } from './help.js'

// Parse the supplied commands and options
const { values, positionals } = parseArgs({
  options: {
    version: {
      type: 'boolean',
      short: 'v',
    },
    help: {
      type: 'boolean',
      short: 'b',
    },
    'no-copy': {
      type: 'boolean',
      short: 'n',
    },
    special: {
      type: 'string',
      short: 's',
      multiple: true,
    }
  },
  allowPositionals: true,
});

// Output the package's version if
// the `--version was supplied
if (values.version) {
  console.log(pkg.version)
  process.exit(0)
}

if (values.help) {
  console.log(help)
  process.exit(0)
}

const main = async () => {
  const sub = positionals.join(' ')
  if (!sub) {
    console.error(`${red('Error!')} Please specify an input: ${grey('title "input"')}`)
    process.exit(1)
  }

  const output = title(sub, { special: values.special })
  const copy = !values['no-copy']

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
