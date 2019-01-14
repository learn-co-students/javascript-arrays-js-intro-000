var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 // Both functions take two parameters, an array and an element to add to the
 // beginning of the array, and both functions should add the element to the
 // beginning of the array and then return the whole array.

function addElementToBeginningOfArray(array, elementToAdd) {
//should return a new array and not modify the original
  return array = [elementToAdd, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
//should alter the original array that's passed in
  array.unshift(elementToAdd);
  return array;
}

function addElementToEndOfArray(array, elementToAdd) {
  // should not alter original array
  return array = [...array, elementToAdd]
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  // should alter the original array
  array.push(elementToAdd);
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
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
