// Utilities
const lowerCase = require('./lower-case')
const specials = require('./specials')

const regex = /(?:(?:((?:^|[.!?;:"-])\s*)(\w))|(\w))(\w*)/g

module.exports = str => {
  str = str.toLowerCase().replace(regex, (m, lead='', forced, lower, rest) => {
    if (!forced) {
      const fullLower = lower + rest

      if (lowerCase.has(fullLower)) {
        return m
      }
    }

    return lead + (lower || forced).toUpperCase() + rest
  })

  specials.forEach(([pattern, s]) => {
    str = str.replace(pattern, s)
  })

  return str
}
