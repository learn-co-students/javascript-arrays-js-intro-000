var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
  }
destructivelyAddElementToBeginningOfArray(chocolateBars, "something");

function addElementToBeginningOfArray (array, element) {
  var temp = [element, ...array];
  return temp;
  }
addElementToBeginningOfArray(chocolateBars, "something");


function addElementToEndOfArray(array, element){
  var temp = [...array, element];
  return temp;
}
addElementToEndOfArray(chocolateBars, "something")

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, "something")


function accessElementInArray(array, index) {
  return array[index];
}
accessElementInArray(chocolateBars, 2);

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift();
}
destructivelyRemoveElementFromBeginningOfArray (chocolateBars)

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
removeElementFromBeginningOfArray(chocolateBars);

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length-1);
}
removeElementFromEndOfArray(chocolateBars);
