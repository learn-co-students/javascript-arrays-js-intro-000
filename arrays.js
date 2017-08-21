var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//array.unshift(argument) is adding (argument) in the first order of array
//array.push(argument) is adding(argument) in the last order of array
//spread operator '...var' is like adding whole list of array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
