var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

var array = [];
function addElementToBeginningOfArray(array,element){

  //var array = new Array();
   array.unshift(element);
return array;
}

addElementToBeginningOfArray(array, 'foo');

//var array = ;
function destructivelyAddElementToBeginningOfArray(array,element){

  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(array,'foo');

var array = [];
function addElementToEndOfArray(array, element){

array.push(element);
return array;
}
addElementToEndOfArray(array,'foo');

function destructivelyAddElementToEndOfArray(array,element){
array.push(element);
return array;
}

destructivelyAddElementToEndOfArray(array,'foo');

function accessElementInArray(array,index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
