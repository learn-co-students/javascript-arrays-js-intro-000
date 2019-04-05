// define array
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// creates new array by adding an element to the beginning of another array -- does not modify original array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// modifies an array by adding an element to the beginning of it
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// creates new array by adding an element to the end of another array -- does not modify original array
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// modifies an array by adding an element to the end of it
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// accesses the element at the given index of the array
function accessElementInArray(array, index) {
  return array[index];
}

// modifies an array by removing the first element
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// creates a new array by removing the last element of another array -- does not modify original array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// modifies an array by removing the last element
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// creates a new array by removing the last element of another array -- does not modify original array
function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1);
}
