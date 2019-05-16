var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  newArray.unshift(element);
  return newArray;
};

function destructivelyAddElementToBeginningOfArray (array,element) {
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element) {
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array;
  newArray = newArray.slice(0, newArray.length - 1);
  return newArray;
}
