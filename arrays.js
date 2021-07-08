// JavaScript Arrays

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var myArrayAgain = [element, array[0]]
  return myArrayAgain;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var myArray = [array[0], element];
  return myArray;
}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push(element)
  return array;
}

function accessElementInArray(array, index) {

  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {

  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = [1,2,3]
  array = array.slice(1)
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {

  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = [1, 2, 3]
  array = array.slice(0, array.length - 1)
  return array;
}
