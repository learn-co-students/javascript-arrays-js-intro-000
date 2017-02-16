//TODO: In arrays.js, define a variable called chocolateBars.
//Its value should be an array of the strings snickers, hundred grand, kitkat,
//and skittles.

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//TODO: In arrays.js, define two functions, addElementToBeginningOfArray and
//destructivelyAddElementToBeginningOfArray. Both functions take two
//parameters, an array and an element to add to the beginning of the array,
//and both functions should add the element to the beginning of the array and
//then return the whole array. The destructive function,
//destructivelyAddElementToBeginningOfArray, should alter the original array
//that's passed in; addElementToBeginningOfArray, on the other hand, should
//return a new array and not modify the original.

function addElementToBeginningOfArray(array, element) {
  newArray = array
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//TODO: Define two more functions, addElementToEndOfArray and
//destructivelyAddElementToEndOfArray. These functions also take two arguments,
//an array and an element to add to the end of the array.
//addElementToEndOfArray should not alter the original array;
//destructivelyAddElementToEndOfArray should alter the original array.

function addElementToEndOfArray(array, element) {
  newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  newArray = array
  newArray.push(element);
  return newArray;
}

//TODO: Define a function in arrays.js called accessElementInArray.
//The function should accept an array and an index and return the element at
//that index.

function accessElementInArray(array, index) {
  return array[index];
}

//TODO: Define a function in arrays.js called
//destructivelyRemoveElementFromBeginningOfArray that takes an array as its
//only argument and removes the first element. Your function should then return
//the entire array, and it should mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift;
  return array;
}

//TODO: Define a function in arrays.js called
//removeElementFromBeginningOfArray that takes an array as its only argument
//and removes the first element. Your function should then return the entire
//array, and it should not mutate the underlying array.

function removeElementFromBeginningOfArray(array) {
  newArray = array;
  newArray.shift();
  return newArray;
}

//TODO: Define a function in arrays.js called
//destructivelyRemoveElementFromEndOfArray that takes an array as its only
//argument and removes the last element. Your function should return the entire
//array, and it should mutate the array.

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop;
  return array;
}

//TODO: Define a function in arrays.js called removeElementFromEndOfArray
//that takes an array as its only argument and removes the last element. Your
//function should return the entire array, and it should not mutate the array.

function removeElementFromEndOfArray(array) {
  newArray = array;
  newArray.pop();
  return newArray;
}
