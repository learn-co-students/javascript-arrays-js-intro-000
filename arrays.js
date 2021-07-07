var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// add to beginning; return a new array and NOT modify the original
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
// add to beginning; alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// add to end; return a new array and NOT modify the original
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

// return the entire mutated array after element is added to the end
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

// return the entire mutated array after the 1st element is removed
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

// return not mutated array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

// return the entire mutated array after the last element is removed
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

// remove last element; return the entire array NOT mutated.
function removeElementFromEndOfArray(array) {
  return array.slice(0, (array.length - 1))
}
