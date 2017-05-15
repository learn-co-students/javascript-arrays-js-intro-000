var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function (array, element) {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = function (array, element) {
  array.unshift (element);
  return array;
}

var addElementToEndOfArray = function (array, element) {
  return [...array, element]
}

var destructivelyAddElementToEndOfArray = function (array, element) {
  array.push (element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index]
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
  return array.slice(0, array.length - 1)
}
