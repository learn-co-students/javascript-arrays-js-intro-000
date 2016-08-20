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

// Not working.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Not working.
function removeElementFromBeginningOfArray(array) {
  array.slice();
  return array;
}

// Not working.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
