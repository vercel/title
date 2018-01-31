const intended = [
  'ZEIT',
  'ZEIT Inc.',
  'CLI',
  'API',
  'Next.js',
  'Node.js',
  'HTTP',
  'HTTPS'
]

module.exports = intended.map(s => [new RegExp(`\\b${s}\\b`, 'gi'), s])
