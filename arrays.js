var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, e){
  arr1 = [e, ...arr];
  return arr1;
}
function destructivelyAddElementToBeginningOfArray(arr, e) {
  arr.unshift(e);
  return arr;
}
function addElementToEndOfArray(arr, e){
  arr2 = [...arr, e];
  return arr2;
}
function destructivelyAddElementToEndOfArray(arr, e) {
  arr.push(e);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length-1)
}
