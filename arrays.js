var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var ele = element;
  var arr = array;
  var newArray = [ele, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var ar = array;
  var el = element
  ar.unshift(el)
  return ar
}

function destructivelyAddElementToEndOfArray(array, element) {
  var arr = array;
  var ele = element;
  arr.push(ele);
  return arr;
}

function addElementToEndOfArray(array, element) {
  var arr = array;
  var ele = element;
  var newArray = [...arr, ele]
  return newArray;
}

function accessElementInArray(array, index) {
  var arr = array;
  var idx = index;
  return arr[idx]
}

function removeElementFromBeginningOfArray(array) {
  var arr = array;
  arr.shift(0)
  return arr;
}

function removeElementFromEndOfArray(array) {
  var arr = array
  arr.pop()
  return arr
}
