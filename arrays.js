var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(chocolateBars, element ){
  //should return a new array and not modify the original
  //var chocolateBars = [element, chocolateBars[0]]
  //return chocolateBars;
  //return [ element, ...chocolateBars];
  return [ element, ...array];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
//should alter the original array that's passed in
  chocolateBars.unshift(element);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element){
//should not alter the original array
  //array.push(element);                  //push places an element at the end of an array list
  //return array;
  return [...chocolateBars, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
//should alter the original array
  array.push(element);
  return array;

  //[...array, "element"]
}
function accessElementInArray(array, index){

  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift() ;
  return array;
}
function removeElementFromBeginningOfArray(array){
  //return the entire array in the same line, and it should not mutate the original array.
  array.slice(1);
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
  // Your function should return the entire array, and it should mutate the array
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  //function should return the array without the last element, and it should not mutate the original array.
  return array.slice(0, array.length - 1);
  //return array;
}
