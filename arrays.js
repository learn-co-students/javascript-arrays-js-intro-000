var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, newString) {
  return [newString, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, newString) {
  array.unshift(newString)
  return array
}

function addElementToEndOfArray(array, newString) {
  return [...array, newString]
}

function destructivelyAddElementToEndOfArray(array, newString) {
  array.push(newString)
  return array
}

function accessElementInArray(array, i) {
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
