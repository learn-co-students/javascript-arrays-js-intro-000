var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, elem) {
  var newArray = [elem, ...arr]
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = (arr, elem) => {
   arr.unshift(elem)
   return arr
}

function addElementToEndOfArray (arr, elem) {
  var newArray = [...arr, elem]
  return newArray;
}

var destructivelyAddElementToEndOfArray = (arr, elem) => {
  arr.push(elem);
  return arr
}

var accessElementInArray = (arr, i) => {
  return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  var newArray = arr.slice(1);
  return newArray
}

function removeElementFromEndOfArray (arr) {
  var newArray = arr.slice(0, arr.length - 1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop()
  return arr
}
