var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, name) {
  return [name, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, name) {
  array.unshift(name);
  return(array);
}

function addElementToEndOfArray(array, name) {
  return [...array, name]
}

function destructivelyAddElementToEndOfArray(array, name) {
  array.push(name);
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
  return array.slice(1);

}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
