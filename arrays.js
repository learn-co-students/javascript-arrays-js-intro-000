var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array, element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  var accessElementInArray = [1,2,3];
  return accessElementInArray[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray
}
