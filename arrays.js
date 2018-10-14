var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, a){
  var newArr = [a, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  var newArr = arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, a){
  var newArr = [...arr, a];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, i){
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr, element){
  arr.shift(element);
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  slicedArr = arr.slice(1);
  return slicedArr;
}  
