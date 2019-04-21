var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var arrNew = [element, ...arr];
  return arrNew;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr; //actions change the underlying array
}

function addElementToEndOfArray(arr, element) {
  var arrNew = [...arr, element];
  return arrNew;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  var arr2 = arr.slice(1);
  return arr2;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var arr2 = arr.slice(0, arr.length-1);
  return arr2;
}
