// define var. chocolateBars
var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];

// define 2 functions that take 2 parameter, array & element
// add element at the beginning of array 
function addElementToBeginningOfArray (array, element) {
  return[element, ...array];
  }
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
   }
  //define 2 functions that add to the end of the array 
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  }
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }
  /*define function that accept an array & an index & return element @ index */
  function accessElementInArray (array, index){
    return array[index];
  }
  /*define function that take array as its only arguement & remove first element */
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  // function removes its 1sr element in the array
  function removeElementFromBeginningOfArray(array){
    return array.slice(1);
  }
  // function removes its 1sr element in the array
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
  }
  // function removes its 1sr element in the array
  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1);
  }