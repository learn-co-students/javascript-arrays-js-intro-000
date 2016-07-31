var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function descructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, 2);
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
