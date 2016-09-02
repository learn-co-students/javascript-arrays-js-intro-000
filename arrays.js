var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  //should return a new array and not modify the original
  var newArray;
  newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  //should alter the original array that's passed in
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  //should not alter the original array
  var newArray;
  newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element){
  //should alter the original array
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}
/*
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  //should alter the original array
  array.shift(element);
  return array;
}
*/
function removeElementFromBeginningOfArray(array){
  //should not alter the original array
  var newArray;
  newArray=array.slice(1);
  return newArray;
}
/*
function destructivelyRemoveElementFromEndOfArray(array){
  //should mutate the array
  array=array.pop();
  return array;
}
*/
function removeElementFromEndOfArray(array){
  //should not mutate the array.
  var newArray;
  newArray = array.slice(0, array.length-1);
  return newArray;
}
