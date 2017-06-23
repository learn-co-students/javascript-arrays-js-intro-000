var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];


function addElementToBeginningOfArray(array, element) {
  var one = [array];
  var two = [element, ...array];
  return two
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var one = [array];
  var two = [...array, element];
  return two
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray (array, index) {
  var four = [array];
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray (array) {
  array.shift();
  return array
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  var five = array.slice(0, array.length - 1)
  return five
}
