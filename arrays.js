var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {return [element, ...array];}
function addElementToEndOfArray(array, element) {return [...array, element];}

function removeElementFromBeginningOfArray(array) {return array.slice(1, array.length);}
function removeElementFromEndOfArray(array) {return array.slice(0, array.length - 1);}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element); //only returns element at begining of array
  return array; //returns the altered array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);//only returns element at begining of array
  return array;//returns the altered array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();//only returns element at begining of array
  return array;//returns the altered array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();//only returns element at begining of array
  return array;//returns the altered array
}

function accessElementInArray(array, element) {return array[element];}
