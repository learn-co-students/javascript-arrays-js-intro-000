var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = array;
  newNewArray = [element, ...array];
  return newNewArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = array;
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = array;
  newNewArray = [...array, element];
  return newNewArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array = array;
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
