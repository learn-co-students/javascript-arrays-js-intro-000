var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}
function addElementToEndOfArray(arr, element){
  var newArr = [...arr, element];
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}
function accessElementInArray(arr, index){
  return arr[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  var newArr = arr.splice(1);
  return newArr;
}
function removeElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
