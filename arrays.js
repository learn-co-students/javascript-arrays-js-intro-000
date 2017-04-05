
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [];
// adds element to beginning of array, but does not alter array

function addElementToBeginningOfArray (array, value) {
  var newArray = [value, ...array]
  return newArray
}

// adds and element to the beginning of an array, alters the original array
function destructivelyAddElementToBeginningOfArray (array, value) {
  array.unshift(value)
  return array
}
//  adds element to the end of an array, does not alter the array
function addElementToEndOfArray (array, value) {
  var newArray = [...array, value]
  return newArray
}

// adds element to the end of an array, alters the orig array
function destructivelyAddElementToEndOfArray (array, value) {
  array.push(value)
  return array
}

// accesses the element in array at the given index
function accessElementInArray (array, value) {
  return (array[value])
}

// returns the array with the first element removed, did not make a copy of the array when removing the first element
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  newArray = array.slice(0, array.length - 1)
  return newArray
}
