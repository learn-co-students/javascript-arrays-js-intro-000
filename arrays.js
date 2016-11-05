var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, i) {
    return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
    return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1);
  return arr;
}
