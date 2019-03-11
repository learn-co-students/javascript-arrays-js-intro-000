var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(heroes, element) {
  heroes.push(element);
  return heroes;
}

function accessElementInArray(array, index) {
  return array[2];
}

function removeElementFromBeginningOfArray(array) {
  const newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  const newArray = array.slice(0, array.length -1);
  return newArray;
}