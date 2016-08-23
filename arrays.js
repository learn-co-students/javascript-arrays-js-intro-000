var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

// Remove from the front of an Array.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Remove from the front of an Array.
function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Remove from the end of an Array.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// Remove from the end of an Array.
function removeElementFromEndOfArray (array) {
  array.pop();
  return array;
}
// This is text that has been added to this file and saved.
