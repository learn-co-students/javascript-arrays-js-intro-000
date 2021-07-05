var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, prependValue) {
  return [prependValue, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, prependValue) {
  array.unshift(prependValue)
  return array
}

function addElementToEndOfArray (array, appendValue) {
  return [...array, appendValue]
}

function destructivelyAddElementToEndOfArray (array, appendValue) {
  array.push(appendValue)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array)
{
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
