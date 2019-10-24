var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [1]
function addElementToBeginningOfArray(array, element) {
  return ['foo', ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
  return array
}

function accessElementInArray(array, index) {
  var array = [1,2,3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1,2,3]
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var array = [1,2,3]
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1,2,3]
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var array = [1,2,3]
  return array.slice(0, array.length - 1)
}
