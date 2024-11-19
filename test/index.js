// Packages
import test from 'ava'

// Source
import title from '../dist/esm/index.js'

test('#1', t => {
  const from = 'aPi 2.0: lOG-in with zeit, new dOCs & more'
  const to = 'API 2.0: Log-In with ZEIT, New Docs & More'

  t.is(title(from), to)
})

test('#2', t => {
  const from = 'updates TO hAndLinG of Failed paYMEnts'
  const to = 'Updates to Handling of Failed Payments'

  t.is(title(from), to)
})

test('#3', t => {
  const from = 'toWArds NEXT.JS 5: Introducing cANaRY Updates'
  const to = 'Towards Next.js 5: Introducing Canary Updates'

  t.is(title(from), to)
})

test('#4', t => {
  const from = 'noW deSktop and now cLI are prODUCts of zeIt'
  const to = 'Now Desktop and Now CLI Are Products of ZEIT'

  t.is(title(from), to)
})

test('#5', t => {
  const from = 'capitalize your titles'
  const to = 'Capitalize Your Titles'

  t.is(title(from), to)
})

test('#6', t => {
  const from = 'mY cusToM brand is awesome'
  const to = 'My Custom BRAnD Is awesoMe'

  t.is(title(from, {
    special: ['BRAnD', 'awesoMe']
  }), to)
})

test('#7', t => {
  const from = 'modify speCials like Facebook or microsoft'
  const to = 'Modify Specials like facebook or Microsoft'

  t.is(title(from, {
    special: ['facebook', 'Microsoft']
  }), to)
})

test('#8', t => {
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

test("should capitalize the last word regardless of syntax", t => {
  let from, to;

  from = "there and beyond"
  to = "There and Beyond"
  t.is(title(from), to)

  from = "be careful what you wish for"
  to = "Be Careful What You Wish For"
  t.is(title(from), to)

  from = "XYZ: what is it good for"
  to = "XYZ: What Is It Good For"
  t.is(title(from, { special: ["XYZ"] }), to)
})

test("supports international characters", t => {
  let from = "çeşme city"
  let to = "Çeşme City"
  t.is(title(from), to)

  from = "la niña esta aquí"
  to = "La Niña Esta Aquí"
  t.is(title(from), to)

  from = "forhandlingsmøde"
  to = "Forhandlingsmøde"
  t.is(title(from), to)

  from = "đội"
  to = "Đội"
  t.is(title(from), to)

  from = "tuyển"
  to = "Tuyển"
  t.is(title(from), to)
})
