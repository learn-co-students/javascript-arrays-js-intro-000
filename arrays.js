var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, elem){
    return [elem, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}
function addElementToEndOfArray(arr, elem){
  return [...arr, elem]
}
function destructivelyAddElementToEndOfArray(arr,elem){
  arr.push(elem);
  return arr;
}
function accessElementInArray(arr, index){
  return arr[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.slice(1);
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1);
  return newArr;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.slice(0, -1);
  return arr;
}
function removeElementFromEndOfArray(arr){
  arr.pop()
  return arr;
}
