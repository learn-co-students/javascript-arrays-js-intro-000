var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
var array
newArray= [element,...array]
return newArray
}
 function destructivelyAddElementToBeginningOfArray(array, element){
var array;
array.unshift(element);
return array
 }
 function addElementToEndOfArray(array, element){
   var array
   newArray= [...array, element]
   return newArray
 }

function destructivelyAddElementToEndOfArray(array, element){
  var array;
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
var array= [1,2,3,4,5];
return array[index];
}

function  destructivelyRemoveElementFromBeginningOfArray(array){
var array;
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
var array;
array = array.slice(1);
return array;
}
 function destructivelyRemoveElementFromEndOfArray(array){
   var array;
  array.pop();
   return array;

 }

function removeElementFromEndOfArray(array){
  var array;
 array=array.slice(0, array.length-1);
  return array;
}
