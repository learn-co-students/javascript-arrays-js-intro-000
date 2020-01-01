var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];


function addElementToBeginningOfArray (array, element) {
  var newArray = new Array();
  newArray = [element, ...array]
  return newArray;
}



function destructivelyAddElementToBeginningOfArray(array, element) {

  array.unshift(element)
  return array;
}

function addElementToEndOfArray (array, element) {
  var newArray = new Array();
  newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

// Define a function in arrays.js called accessElementInArray.
//The function should accept an array and an index and return the element at that index.
// learn test

function accessElementInArray(array, index) {
  return array[index];
}

// Define a function in arrays.js called destructivelyRemoveElementFromBeginningOfArray
// that takes an array as its only argument and removes the first element.
// Your function should then return the entire array, and it should mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

// Define a function in arrays.js called removeElementFromBeginningOfArray.
// It takes an array as its only argument. The function should remove the first element in the array.
// This function should return the entire array in the same line, and it should not mutate the original array.

function removeElementFromBeginningOfArray(array) {

  array = array.slice(1)
  return array;
}


//  Define a function in arrays.js called destructivelyRemoveElementFromEndOfArray
// that takes an array as its only argument and removes the last element.
// Your function should return the entire array, and it should mutate the array.

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}


//  Define a function in arrays.js called removeElementFromEndOfArray
// that takes an array as its only argument and removes the last element.
// Your function should return the array without the last element, and it should not mutate the original array.

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array;
}
