var chocolateBars = ["snicker","hundred grand","kitkat","skittles"]

//adds element to the beginning of an array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

//adds an element to the beginning of an array
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

//adds an element to the end of an array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// adds an element to the end of an array. does not alter array
function addElementToEndOfArray (array, element) {
  return [...array, element]
}

//
function accessElementInArray (array, index) {
 return array[index]
}
//returns the array with the first element removed
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift ()
  return array
}
//removes the first element from the beginning of the array
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
//returns the array with the last element removed
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
//removes the last element from the array
function removeElementFromEndOfArray (array){
  array = array.slice(0, array.length -1)
  return array
}
