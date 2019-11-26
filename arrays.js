var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,element){
  return [element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

// function addElementToEndOfArray(arr, element){
//   return [...arr,element];
// }

var addElementToEndOfArray = (arr, element) => [...arr, element];

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr
}

var accessElementInArray = (arr, index) => arr[index];

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

var removeElementFromBeginningOfArray = (arr) => arr.slice(1);

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length - 1);
}
