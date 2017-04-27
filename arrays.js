var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

addElementToBeginningOfArray("3musketeers", chocolateBars);

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "twix");

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

addElementToEndOfArray(chocolateBars, "twix");

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars, "twix");

function accessElementInArray(array, index) {
  return array[index]
}

accessElementInArray(chocolateBars, 1);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

removeElementFromEndOfArray(chocolateBars);
