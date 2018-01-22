#!/usr/bin/env node

// Packages
const parse = require('arg')
const { red, grey, blue } = require('chalk')
const clipboardy = require('clipboardy')

// Utilities
const package = require('../package')
const convert = require('../')
const help = require('../lib/help')

// Parse the supplied commands and options
const { _, ...args } = parse({
  '--version': Boolean,
  '--help': Boolean,
  '--no-copy': Boolean,
  '-v': '--version',
  '-h': '--help',
  '-c': '--no-copy'
})

// Output the package's version if
// the `--version was supplied
if (args['--version']) {
  console.log(package.version)
  process.exit(0)
}

if (args['--help']) {
  console.log(help)
  process.exit(0)
}

const main = async () => {
  const sub = _[0]

  if (!sub) {
    console.error(`${red('Error!')} Please specify an input: ${grey('title "input"')}`)
    process.exit(1)
  }

  const output = convert(sub)
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
