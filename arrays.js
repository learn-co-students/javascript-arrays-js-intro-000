var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray (arr, el) {
  return [...arr, el];
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, index) {
  return (arr[index]);
}

function removeElementFromBeginningOfArray (arr, el) {
  arr.shift(el);
  return arr;
}

function removeElementFromEndOfArray (arr, el) {
  arr.pop(el);
  return arr;
}
