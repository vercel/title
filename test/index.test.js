// Packages
import { describe, expect, test } from 'vitest'

// Source
import title from '../dist/esm/index.js'

describe('Converting a string to title case', () => {
  test('should capitalize the first letter of relevant words', () => {
    const from = 'capitalize your titles'
    const to = 'Capitalize Your Titles'

    expect(title(from)).toBe(to)
  })

  test('should lowercase letters in addition to capitalizing them', () => {
    const from = 'updates TO hAndLinG of Failed paYMEnts'
    const to = 'Updates to Handling of Failed Payments'

    expect(title(from)).toBe(to)
  })

  test('should handle titles with special characters', () => {
    const from = "seattle’S BEST coffee & grandma's cookies"
    const to = "Seattle’s Best Coffee & Grandma's Cookies"

    expect(title(from)).toBe(to)
  })

  test('should understand Vercel product names', () => {
    const from = 'noW deSktop and now cLI are prODUCts of zeIt'
    const to = 'Now Desktop and Now CLI Are Products of ZEIT'

    expect(title(from)).toBe(to)
  })

  test('should understand Vercel product names with other special characters', () => {
    let from = 'aPi 2.0: lOG-in with zeit, new dOCs & more'
    let to = 'API 2.0: Log-In with ZEIT, New Docs & More'

    expect(title(from)).toBe(to)

    from = 'toWArds NEXT.JS 5: Introducing cANaRY Updates'
    to = 'Towards Next.js 5: Introducing Canary Updates'

    expect(title(from)).toBe(to)
  })

  test('should modify custom special words', () => {
    let from = 'mY cusToM brand is awesome'
    let to = 'My Custom BRAnD Is awesoMe'

    expect(
      title(from, {
        special: ['BRAnD', 'awesoMe'],
      }),
    ).toBe(to)

    from = 'modify speCials like Facebook or microsoft'
    to = 'Modify Specials like facebook or Microsoft'

    expect(
      title(from, {
        special: ['facebook', 'Microsoft'],
      }),
    ).toBe(to)
  })

  test('should capitalize the last word regardless of syntax', () => {
    let from = 'there and beyond'
    let to = 'There and Beyond'

    expect(title(from)).toBe(to)

    from = 'be careful what you wish for'
    to = 'Be Careful What You Wish For'

    expect(title(from)).toBe(to)

    from = 'XYZ: what is it good for'
    to = 'XYZ: What Is It Good For'

    expect(title(from, { special: ['XYZ'] })).toBe(to)
  })

  test('should not capitalize word in adjacent parens', () => {
    let from = 'employment region(s) for my application'
    let to = 'Employment Region(s) for My Application'

    expect(title(from)).toBe(to)

    from = '(s)omething or other'
    to = '(s)omething or Other'

    expect(title(from)).toBe(to)

    from = 'cat(s) can be a pain'
    to = 'Cat(s) can Be a Pain'

    expect(title(from)).toBe(to)
  })

  test('supports international characters', () => {
    let from = 'çeşme city'
    let to = 'Çeşme City'

    expect(title(from)).toBe(to)

    from = 'la niña esta aquí'
    to = 'La Niña Esta Aquí'

    expect(title(from)).toBe(to)

    from = 'forhandlingsmøde'
    to = 'Forhandlingsmøde'

    expect(title(from)).toBe(to)

    from = 'đội'
    to = 'Đội'

    expect(title(from)).toBe(to)

    from = 'tuyển'
    to = 'Tuyển'

    expect(title(from)).toBe(to)
  })
})
