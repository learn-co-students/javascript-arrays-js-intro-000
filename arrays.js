var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elm) {
  return [elm, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elm) {
  // return arr.unshift(elm);      // Why is this wrong???
  arr.unshift(elm);
  return arr;
}

function addElementToEndOfArray(arr, elm) {
  return [...arr, elm];
}

function destructivelyAddElementToEndOfArray(arr, elm) {
  // return arr.push(elm);    // Why is this wrong???
  arr.push(elm);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  // return arr.shift();      // Why is this wrong???
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  // return arr.pop();      // Why is this wrong???
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1);
}