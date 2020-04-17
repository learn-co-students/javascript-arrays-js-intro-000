var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];
function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var shiArr = arr.shift();
  return arr;
}
function accessElementInArray(arr, ind) {
  return arr[ind];
}
function addElementToBeginningOfArray(arr, ele) {
  return [arr, ...ele];
  //return arr.unshift(ele);
}
function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.unshift(ele);
  //return [arr, ...ele];
}
function addElementToEndOfArray(arr, ele) {
  return [...ele, arr];
}
function destructivelyAddElementToEndOfArray(arr, ele) {
  return arr.push(ele);
}
