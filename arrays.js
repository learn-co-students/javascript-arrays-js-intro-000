var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

var array1=new array();
var array2=new array();

function addElementToBeginningOfArray(array1,add){

  var newArray1=[add,...array1]
  return newArray1;
}

function destructivelyAddElementToBeginningOfArray(array1,add){

array1.unshift(add)
return array1;
}

function addElementToEndOfArray(array1,add) {

  var newArray1=[...array1,add]
  return newArray1;
}

function destructivelyAddElementToEndOfArray(array1,add){

  array1.push(add)
  return array1;
}

function accessElementInArray(array1,n){

  return array1[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array1){

  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1){

  array2=array1.slice(1);
  return array2;
}

function destructivelyRemoveElementFromEndOfArray(array1){

 array1.pop();
  return array1;
}

function removeElementFromEndOfArray(array1){

  return array1.slice(0,array1.length-1)
}
