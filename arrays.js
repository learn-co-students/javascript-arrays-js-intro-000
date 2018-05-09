var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, string) {
  var newArray = [string, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, string) {
  array.unshift(string);
  return array;
}

function addElementToEndOfArray(array, string) {
  var newArray = [...array, string];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, string) {
  array.push(string);
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
  var array = array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var array = array.slice(0, array.length - 1);
  return array;
}
