var chcolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  return newArray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray (array, element) {
  var newArray1 = array;
  return newArray1.push(element);
}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemovelementToBeginningOfArray (array, element) {
  return array.shift(element);
}

function removeElementFromBeginningOfArray (array) {
  var newArray2 = array;
  return newArray2.slice(1);
}

function destructivelyRemovelementFromEndOfArray (array, element) {
  return array.slice(-1);
}

function removeElementFromEndOfArray (array) {
  var newArray3 = array;
  return newArray3.slice(-1);
}