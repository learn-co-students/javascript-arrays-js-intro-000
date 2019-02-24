chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, array_element) {
  return [array_element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, array_element) {
  arr.unshift(array_element);
  return arr;
}

function addElementToEndOfArray(arr, array_element) {
  return [...arr, array_element];
}

function destructivelyAddElementToEndOfArray(arr, array_element) {
  arr.push(array_element);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
