
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array,el){
  return [el,...array];
}

function destructivelyAddElementToBeginningOfArray(array,el){
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array,el){
  var newArray = [...array,el];
  return newArray
}

function destructivelyAddElementToEndOfArray(array,el){
  array.push(el);
  return array;
}

function accessElementInArray(array,el){
  return array[el];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}


function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, (array.length -1));
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
