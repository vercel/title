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

    if (lowerCase.has(lower)) {
      continue
    }

    const cleaned = word.replace(/\.|,|:/gi, '')

    const special = specials.find(special => {
      return cleaned.toLowerCase() === special.toLowerCase()
    })

    if (special) {
      words[index] = word.replace(cleaned, special)
      continue
    }

    words[index] = titleize(word)
  }

  return words.join(' ')
}
