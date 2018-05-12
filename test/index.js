// Packages
const test = require('ava')

// Source
const title = require('../')

test(t => {
  const from = 'aPi 2.0: lOG-in with zeit, new dOCs & more'
  const to = 'API 2.0: Log-In with ZEIT, New Docs & More'

  t.is(title(from), to)
})

test(t => {
  const from = 'updates TO hAndLinG of Failed paYMEnts'
  const to = 'Updates to Handling of Failed Payments'

  t.is(title(from), to)
})

test(t => {
  const from = 'toWArds NEXT.JS 5: Introducing cANaRY Updates'
  const to = 'Towards Next.js 5: Introducing Canary Updates'

  t.is(title(from), to)
})

test(t => {
  const from = 'noW deSktop and now cLI are prODUCts of zeIt'
  const to = 'Now Desktop and Now CLI Are Products of ZEIT'

  t.is(title(from), to)
})

test(t => {
  const from = 'capitalize your titles'
  const to = 'Capitalize Your Titles'

  t.is(title(from), to)
})

test(t => {
  const from = 'mY cusToM brand is awesome'
  const to = 'My Custom BRAnD Is awesoMe'

  t.is(title(from, {
    special: ['BRAnD', 'awesoMe']
  }), to)
})

test(t => {
  const from = 'modify speCials like Facebook or microsoft'
  const to = 'Modify Specials like facebook or Microsoft'

  t.is(title(from, {
    special: ['facebook', 'Microsoft']
  }), to)
})

test(t => {
  const from = "seattle’S BEST coffee & grandma's cookies"
  const to = "Seattle’s Best Coffee & Grandma's Cookies"

  t.is(title(from), to)
})

test("should not capitalize word in adjacent parens", t => {
  let from = "employment region(s) for my application"
  let to = "Employment Region(s) for My Application"
  t.is(title(from), to)

  from = "(s)omething or other"
  to = "(s)omething or Other"
  t.is(title(from), to)

  from = "cat(s) can be a pain"
  to = "Cat(s) can Be a Pain"
  t.is(title(from), to)
})