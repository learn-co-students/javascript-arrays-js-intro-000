var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

var preserveMe = ['one', 'two', 'three'];
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}
//addElementToBeginningOfArray(preserveMe, 'zero');

var mutateMe = ['one', 'two', 'three'];
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
//destructivelyAddElementToBeginningOfArray(mutateMe, 'zero');

var preserveEnd = ['one', 'two', 'three'];
function addElementToEndOfArray(array, element){
  var newEnding = [...array, element];
  return newEnding;
}
//addElementToEndOfArray(preserveEnd, 'four');

var mutateEnd = ['one', 'two', 'three'];
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
//destructivelyAddElementToEndOfArray(mutateEnd, 'four');

function accessElementInArray(array, index){
  return array[index];
}
//accessElementInArray(chocolateBars, 2);

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
//destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(array){
  var candy = array.slice(1);
  return candy;
}
//removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array){
  var candy = array.slice(0, array.length - 1);
  return candy;
}
//destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
//removeElementFromEndOfArray(chocolateBars);
