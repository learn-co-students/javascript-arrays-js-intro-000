var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var newArr = [...array, element]
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

var accessElementInArray = (array, index) => {
  return array[index];
}

var  destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length -1)
}
