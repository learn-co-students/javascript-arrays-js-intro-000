var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array] // spread operator - not destructive
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element) // unshift adds element to beginning of array
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element] // spread operator
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element) // push adds element to end of array
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
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1)
  return newArray;
}
