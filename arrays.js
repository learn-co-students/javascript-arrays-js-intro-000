var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
	return [element, ...array]
}


var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
	return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift()
  return array;
}

var removeElementFromBeginningOfArray = (array) => {
  return array.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop();
  return array
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length -1)
}
