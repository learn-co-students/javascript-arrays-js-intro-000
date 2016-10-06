var chocolateBars = ["snickers", "hundred grand", "kitkat",  "skittles"];

function addElementToBeginningOfArray (arr, elm) {
  var retArray = [elm, ...arr];
  return retArray;


}

function destructivelyAddElementToBeginningOfArray(arr, elm) {

arr.splice(0,0,elm);
return arr;
}
function addElementToEndOfArray (arr, elm) {
  var retArray = [...arr,elm];
  return retArray;


}
function destructivelyAddElementToEndOfArray (arr, elm) {
  arr.splice(arr.length,arr.length, elm);
  return arr;

}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1);
}
function accessElementInArray(arr, indx) {
  return arr[indx];
}
