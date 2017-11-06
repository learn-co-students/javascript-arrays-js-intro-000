var chocolateBars=['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(arr,elem){
  return [elem,...arr];
}

function destructivelyAddElementToBeginningOfArray(arr,elem){
var arr1=arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr,elem){
  return [...arr,elem];
}
function destructivelyAddElementToEndOfArray(arr,elem){
  var s=arr.push(elem);
return arr;

}

function accessElementInArray(arr,ind){

  return arr[ind];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
var a=arr.shift()
  return arr;
}
function removeElementFromBeginningOfArray(arr){
return arr.slice(1);

}
function destructivelyRemoveElementFromEndOfArray(arr){
var b=arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){

  return arr.slice(0,arr.length-1);
}
