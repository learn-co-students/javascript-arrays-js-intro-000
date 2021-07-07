var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arry, element) {
  var newChocolateBars = [element, ...arry]
  return newChocolateBars
};

function destructivelyAddElementToBeginningOfArray(arry, element) {
  arry.unshift(element)
  return arry
};

function addElementToEndOfArray(arry, element) {
  var newChocolateBars = [...arry, element]
  return newChocolateBars
}

function destructivelyAddElementToEndOfArray(arry, element) {
  arry.push(element)
  return arry
}

function accessElementInArray(arry, index) {
  return arry[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arry) {
  return arry.shift()
}

function destructivelyRemoveElementFromEndOfArray(arry) {
  return arry.pop()
}

function removeElementFromEndOfArray(arry) {
  var removeLast = arry.slice(0, arry.length - 1)
  return removeLast
}

function removeElementFromBeginningOfArray (arry) {
  return arry.slice(1)
}
