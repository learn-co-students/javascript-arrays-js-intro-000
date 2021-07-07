var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array];// non-mutating
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);// mutate
  return array;
};

function addElementToEndOfArray(array, element) {
  return [...array, element];// non-mutating
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);// mutate
  return array;
};

////////////////////////////////////////////

function accessElementInArray(array, index) {
  return array[index];
};

////////////////////////////////////////////

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();// mutate
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);// non-mutating
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();// mutate
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);// non-mutating
}
