var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = ["foo"];
var element = "foo";
function addElementToBeginningOfArray(array, element) {
//  var array = chocolateBars;
//  var element = "foo";
//  array.unshift(element);
  array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ["element", ...array]
}

function addElementToEndOfArray(array, element) {
  array.push(element);
}

function addElementToEndOfArray(array, element) {
  [...array, "element"]
}

function accessElementInArray(array, index) {
  array(index);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  shift.array()
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.lenth -1);
  array;
}
