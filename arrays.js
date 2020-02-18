var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newelement) {
  return [newelement, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, newelement) {
  array.unshift(newelement)
  return array
}

function addElementToEndOfArray (array, newelement) {
  return [...array, newelement]
}

function destructivelyAddElementToEndOfArray(array, newelement) {
  array.push(newelement)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
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

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length -1)
}
