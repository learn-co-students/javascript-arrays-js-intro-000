var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//return a new array and not modify the original.
function addElementToBeginningOfArray(array, element) {
  addBeginArray = [element, ... array]
  return addBeginArray
}

//alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//should not alter the original array
function addElementToEndOfArray(array, element) {
  addEndArray = [...array, element]
  return addEndArray
}

//should alter the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

//accept an array and an index and return the element at that index.
function accessElementInArray(array, index) {
  return array[index]
}

//takes an array as its only argument and removes the first element
//function should then return the entire array, and it should mutate the array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}

//takes an array as its only argument & should remove the first element in the array
//function should return the entire array in the same line, and not mutate the original array.
function removeElementFromBeginningOfArray(array) {
  sliceArray = array.slice(1)
  return sliceArray
}

//takes an array as its only argument and removes the last element
//function should return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

//takes an array as its only argument and removes the last element
//function should return the array without the last element & should not mutate the original array
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
