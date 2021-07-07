var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newEndingArray = [...array, element];
  return newEndingArray;
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var removeBeginning = array.slice(1);
  return removeBeginning;
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
   array.pop();
   return array;
}

var removeElementFromEndOfArray = (array) => {
  var removeEnding = array.slice(0, array.length - 1);
  return removeEnding;
}
