var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (x,y) => {
  return [y, ...x]
}

var destructivelyAddElementToBeginningOfArray = (x, y) => {
  x.unshift(y)
  return x
}

var addElementToEndOfArray = (x, y) => {
  return [...x, y]
}

var destructivelyAddElementToEndOfArray = (x, y) => {
  x.push(y)
  return x
}

var accessElementInArray = (x, y) => {
  return x[y]
}

var destructivelyRemoveElementFromBeginningOfArray = (x) => {
  x.shift()
  return x
}

var removeElementFromBeginningOfArray = (x) => {
  return x.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (x) => {
  x.pop()
  return x
}

var removeElementFromEndOfArray = (x) => {
  return x.slice(0, x.length - 1)
}
