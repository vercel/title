// Packages
const titleize = require('titleize')

// Utilities
const lowerCase = require('./lower-case')
const specials = require('./specials')

module.exports = title => {
  const words = title.split(' ')

  for (const index in words) {
    const word = words[index]
    const lower = word.toLowerCase()

    const isFirst = Number(index) === 0
    const isLast = Number(index) === (words.length - 1)

    if (!isFirst && !isLast && lowerCase.has(lower)) {
      words[index] = lower
      continue
    }

    words[index] = titleize(word)
  }

  let full = words.join(' ')

  for (const special of specials) {
    const regex = new RegExp(special, 'gi')
    full = full.replace(regex, special)
  }

  return full
}
