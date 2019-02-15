//Creates an array of item called elements
var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles']

//Adds an element to the beginning of a array without changing the orginal array
function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

//Adds a element to the beginning and mutates the array
function destructivelyAddElementToBeginningOfArray(list1, e) {
  list1.unshift(e)
  return list1
}

//Adds a element to the end of an array without mutating the array
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

//Adds a element to the end and mutates the array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

//Lets you access any element in the array
function accessElementInArray(array, index) {
  return array[index]
}

//Removes the first element in the array and mutates it
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

//Removes the first element in the array withour mutating it
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

//Removes the last elemeing in the array and mutates it
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

//Removes the last element in the array without mutating it
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
