var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


// return new array, without modifying the original.
function addElementToBeginningOfArray(a, element) {
  b = [element, ...a];
  return b;
}

// alter original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// returns new array with element in the front
function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray;
}

// returns modified array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {   // should mutate underlying array
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1); // should not mutate underlying array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;

}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
