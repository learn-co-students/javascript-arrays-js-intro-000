var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var arr = [...array];
  arr.unshift(element);
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arr = [...array];
  arr.push(element);
  return arr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
