// Packages
const test = require('ava')

// Source
const title = require('../lib')

test(t => {
  const from = 'aPi 2.0: lOG-in with zeit, new dOCs & more'
  const to = 'API 2.0: Log-In with ZEIT, New Docs & More'

  t.is(title(from), to)
})
