const mask = title => {
  const words = title.split(' ')
  const types = []

  for (const index in words) {
    const word = words[index]
    const firstLetter = word.charAt(0).toUpperCase()
    const remaining = word.substr(1).toLowerCase()

    words[index] = firstLetter + remaining
  }

  console.log(words)

  return title
}

const input = 'API 2.0: Log-In with ZEIT, New Docs & More'
const output = mask(input.toLowerCase())

console.log(input === output)
console.log(output)
