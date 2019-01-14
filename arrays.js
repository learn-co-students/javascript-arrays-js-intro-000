var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, n) {
  var newArr;
  return newArr = [n, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  arr.unshift(n);
  return arr;
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1);
}

function addElementToEndOfArray (arr, n) {
  var newArr;
  return newArr = [...arr, n];
}

function destructivelyAddElementToEndOfArray (arr, n) {
  arr.push(n);
  return arr;
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr;
}
