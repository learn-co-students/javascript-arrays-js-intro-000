var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  chocolateBars = [element, ...array];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return chocolateBars;
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...array, element];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift;
  return chocolateBars;
}

function removeElementFromBeginningOfArray(array) {
  chocolateBars = array.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(array) {
  chocolateBars = array.slice(0, array.length - 1);
  return chocolateBars;
}
