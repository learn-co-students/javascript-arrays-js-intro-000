var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element) {
  let newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  let newArr = arr;
  newArr.unshift(element);
  return newArr;
}

function addElementToEndOfArray (arr, element){
  let newArr = arr.slice();
  newArr.push(element);
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, idx) {
  return arr[idx];
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
   return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
