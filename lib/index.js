// Utilities
const lowerCase = require('./lower-case')
const specials = require('./specials')

const regex = /(?:(?:((?:^|[.!?;:"-])\s*)(\w))|(\w))(\w*[’']*\w*)/g

const convertToRegExp = specials => specials.map(s => [new RegExp(`\\b${s}\\b`, 'gi'), s])

module.exports = (str, options = {}) => {
  str = str.toLowerCase().replace(regex, (m, lead = '', forced, lower, rest) => {
    if (!forced) {
      const fullLower = lower + rest

      if (lowerCase.has(fullLower)) {
        return m
      }
    }

    return lead + (lower || forced).toUpperCase() + rest
  })

  const customSpecials = options.special || []
  const replace = [...specials, ...customSpecials]
  const replaceRegExp = convertToRegExp(replace)

  replaceRegExp.forEach(([pattern, s]) => {
    str = str.replace(pattern, s)
  })

  return str
}
