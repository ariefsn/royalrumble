const royalrumble = require('./royalrumble')

const names = [
  'Louis IX',
  'Louis VIII',
  'David II',
  'William I',
  'George V',
  'John XLIX',
  'William III',
  'Elizabeth XL',
  'Patrick XLVI',
  'Elizabeth XXX',
  'David XXII',
  'David IV',
  'Alexandria XXXIV',
  'John XVI',
  'Alexandria VII'
]

const result = royalrumble.getSortedNames(names)

console.log(result)
