var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "mars";
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "mars";
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
return array;
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "mars";
function addElementToEndOfArray(array, element){
  return [...array, element];
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "mars";
function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
return array;
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var index = 2;
function accessElementInArray(array, index){

return array[index];
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
return array;
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
function removeElementFromBeginningOfArray(array){
   array = array.slice(1);
 return array;
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyRemoveElementFromEndOfArray(array){
 array.pop();
return array;
}

var array = ["snickers", "hundred grand", "kitkat", "skittles"];
function removeElementFromEndOfArray(array){
 array = array.slice(0, array.length - 1);
return array;
}
