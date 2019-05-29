var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = [1];
  myArray.unshift(element);
  return myArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var Array = array;
  Array.unshift(element);
  return Array;
}

function addElementToEndOfArray(array, element) {
  const Array = [1];
  Array.push(element);
  return Array;
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  var Array = array;
  Array.push(element);
  return Array;
  
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
  
}

function removeElementFromBeginningOfArray(array) {
  var Array = array.slice(1);
  return Array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
  
}

function removeElementFromEndOfArray(array) {
  var Array = array;
  Array = Array.slice(0, Array.length - 1);
  return Array;
}