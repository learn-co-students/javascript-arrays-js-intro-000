//1
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//2
function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//3
function addElementToEndOfArray (array, element) {
  var newArray = [...array,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

//4
function accessElementInArray (array, index) {
  return array[index];
}

//5
function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}

//6
function removeElementFromBeginningOfArray (array) {
  newArray = array.slice(1);
  return newArray;
}

//7
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

//8
function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
