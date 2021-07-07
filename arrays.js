var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (a, b) => {
  return newArray = [b, ...a]
}

var destructivelyAddElementToBeginningOfArray = (a,b) => {
  a.unshift(b)

  return a
}

var addElementToEndOfArray = (a, b) => {
  return newArray = [...a, b]
}

var destructivelyAddElementToEndOfArray = (a,b) => {
  a.push(b)
  
  return a
}

var accessElementInArray = (a, i) => {
  return a[i]
}

var destructivelyRemoveElementFromBeginningOfArray = (a) => {
  a.shift()

  return a
}

var removeElementFromBeginningOfArray = (a) => {
  return a.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (a) => {
  a.pop()

  return a
}

var removeElementFromEndOfArray = (a) => {
  return a.slice(0, a.length -1)
}
