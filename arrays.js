var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, elem){
  var newarr = arr.unshift(elem);
  return newarr;
}
function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem){
  var newarr = arr.push(elem);
  return newarr;
}
function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(0, 1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop;
  return arr;
}

function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length - 1);
  return arr;
}