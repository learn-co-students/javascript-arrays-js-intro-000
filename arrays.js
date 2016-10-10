var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];

function addElementToBeginningOfArray(array, string){
  var array = [1];
  array = [string, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, string){
  array.unshift(string);
  return array;
}

function addElementToEndOfArray(array, string){
  var array = [1];
  array = [...array, string];
  return array;
}

function destructivelyAddElementToEndOfArray(array, string){
  array.push(string);
  return array;
}

function accessElementInArray(array, string){
  var array = [1, 2, 3];
  return array[string];
}

function removeElementFromBeginningOfArray(array){
  var array = [1, 2, 3];
  array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array){
  var array = [1, 2, 3];
  array = array.slice(0, array.length - 1);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array = [1, 2, 3];
  array = array.shift();
  return array;
}
