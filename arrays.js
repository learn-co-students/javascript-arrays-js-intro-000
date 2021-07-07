var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newarray= [element, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var newarray = [...array, element];
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newarray = array.slice(1);
  return newarray;
}

function removeElementFromEndOfArray (array) {
  array.pop(-1);
  return array;
}
