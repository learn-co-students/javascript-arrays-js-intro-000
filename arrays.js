var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element) {
  var newarr = [element,...array];
  return newarr;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element) {
  var arr = [...array, element];
  return arr;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
}

function accessElementInArray(array,ind) {
  return array[ind];
}
