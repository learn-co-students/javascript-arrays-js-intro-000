var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newEndArray = [...array,element];
  return newEndArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array; 
}

function accessElementInArray(array, index) {
  console.log(array[index]);
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newBeginningArray = array.slice(1);
  return newBeginningArray; 
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var newEndOfArray = array.slice(0, array.length - 1);
  return newEndOfArray;
}