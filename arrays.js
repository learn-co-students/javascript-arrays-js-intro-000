var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*
- Define function, addElementToBeginningOfArray.
- Function takes two parameters, an array and an element to add to the beginning of the array.
- Function should add the element to the beginning of the array and then return the whole array.
- The function, addElementToBeginningOfArray should return a new array and not modify the original.
*/

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, array[0]]
  return newArray
}

/*
- Define function, destructivelyAddElementToBeginningOfArray.
- Function takes two parameters, an array and an element to add to the beginning of the array.
- Function should add the element to the beginning of the array and then return the whole array.
- The destructive function, destructivelyAddElementToBeginningOfArray, on the other hand,
  should alter the original array that's passed in.
*/


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}


/*
- Define function, addElementToEndOfArray.
- Function takes two arguments, an array and an element to add to the end of the array.
- addElementToEndOfArray should not alter the original array;
*/

function addElementToEndOfArray(array, element) {
  var newArray = array.push(element);
  return newArray
}

/*
- Define function, destructivelyAddElementToEndOfArray.
- Function takes two arguments, an array and an element to add to the end of the array.
- destructivelyAddElementToEndOfArray should alter the original array.
*/

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array
}

/*
- Define a function in arrays.js called accessElementInArray.
- The function should accept an array and an index and return the element at that index.
*/

function accessElementInArray(array, index) {
  return array[3];
}

/*
- Define a function in arrays.js called destructivelyRemoveElementFromBeginningOfArray that takes an array as its only argument and removes the first element.
- Your function should then return the entire array, and it should mutate the array.
*/

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

/*
- Define a function in arrays.js called removeElementFromBeginningOfArray that takes an array as its only argument and removes the first element.
- Your function should then return the entire array, and it should not mutate the underlying array.
*/

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray
}

/*
- Define a function in arrays.js called destructivelyRemoveElementFromEndOfArray that takes an array as its only argument and removes the last element.
- Your function should return the entire array, and it should mutate the array.
*/

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(...array);
  return array
}

/*
- Define a function in arrays.js called removeElementFromEndOfArray that takes an array as its only argument and removes the last element.
- Your function should return the entire array, and it should not mutate the array.
*/

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray
}
