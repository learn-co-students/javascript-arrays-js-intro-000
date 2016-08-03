/*
  1) arrays descructivelyAddElementToBeginningOfArray(array, element) adds an `element` to the be
ginning of an `array`:
     ReferenceError: descructivelyAddElementToBeginningOfArray is not defined
      at Context.it (test/arrays-test.js:35:14)

  2) arrays descructivelyAddElementToBeginningOfArray(array, element) alters `array`:
     ReferenceError: descructivelyAddElementToBeginningOfArray is not defined
      at Context.it (test/arrays-test.js:41:7
*/

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr];
}

function descructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);

  return array;
}

function addElementToEndOfArray (arr, element) {
  return [...arr, element]
  // ?
}

function destructivelyAddElementToEndOfArray (arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {

  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}
