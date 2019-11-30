module.exports = {
  getSortedNames: function (names = []) {
    let temp = []
 
    names.forEach(e => {
      let name = getName(e)
      let order = getOrder(e)
      let number = getOrderToNumber(order)
      temp.push({
        display: e,
        name,
        number
      })
    })

    temp.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0) || a.number - b.number)

    return temp.map(e => e.display)
  }
}

let getName = (name) => name.split(' ')[0]
let getOrder = (name) => name.split(' ')[1]
let getOrderToNumber = (order) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50
  }

  let prevDigit = 0
  let sum = 0

  for (let i = 0; i < order.length; i++) {
    let digit = map[order[i]]

    let count = 0

    if (sum === 0) {
      count += digit
    } else {
      if (digit > prevDigit) {
        if (sum < digit) {
          count = digit - prevDigit
        } else {
          count = sum - prevDigit + digit - prevDigit
        }
      } else {
        count = digit + sum
      }
    }

    prevDigit = digit

    sum = count
  }

  return sum
}