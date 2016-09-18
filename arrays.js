var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray (arr, elem) {
  var newArray = [elem, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  var newArray=[...arr, elem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  shift(arr);
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var newArray=arr.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  newArray=arr.slice(0,arr.length-1);
  return newArray;
}
