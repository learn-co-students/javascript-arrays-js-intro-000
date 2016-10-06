var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElem) {
  return [newElem,...array];
}

function destructivelyAddElementToBeginningOfArray(array, newElem) {
  array.unshift(newElem);
  return array;
}

function addElementToEndOfArray(array, newElem) {
  return [...array,newElem];
}

function destructivelyAddElementToEndOfArray(array, newElem) {
  array.push(newElem);
  return array;
}

function accessElementInArray(array, n) {
  return array[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(-1);
  return array;
}
