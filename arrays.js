var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var unshift = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var push = array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var shift = array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var slice = array.slice(1)
  return slice
}

function removeElementFromEndOfArray(array) {
  var slice = array.slice(0, array.length - 1)
  return slice
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var shift = array.pop()
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
