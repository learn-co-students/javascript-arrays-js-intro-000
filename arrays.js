var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var superheroines = ["cat woman", "she-hulk", "mystique"];


function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(array, element) {
  return array[element];
};

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
};

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};
