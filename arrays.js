var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//goal is to not modify the original array itself, so put everything in the return statemetn
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

//goal is to modify the underlying array, so modify array in one line and return it to return it modified
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array, n) {
  return array[n];
}
