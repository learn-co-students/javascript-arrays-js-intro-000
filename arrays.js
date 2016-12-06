var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}
var addElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}
var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}
var accessElementInArray = function(array, index) {
  return array[index];
}
var removeElementFromBeginningOfArray = function(array, index) {
  array.shift();
  return array;
}
var removeElementFromEndOfArray = function(array, index) {
  array.pop(index);
  return array;
}
