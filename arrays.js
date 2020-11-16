 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
 var array = [1];
  var newarray = ["foo", ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray() {
 var array = [1];
  var newarray = [...array, "foo"];
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray() {
  var array = [1,2,3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray() {
   var array = [1,2,3];
   array = array.slice(1);
   return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray() {
  var array = [1,2,3];
  var array = array.slice(0, array.length -1);
  return array;
}
