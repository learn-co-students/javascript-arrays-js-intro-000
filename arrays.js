var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, addElement) {
var newArr = [addElement, ...arr];
return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, addElement) {
arr.unshift(addElement);
return arr
}

function addElementToEndOfArray(arr, endElement) {
var newArr = [...arr, endElement];
return newArr
}

function destructivelyAddElementToEndOfArray(arr, endElement) {
arr.push(endElement);
return arr
}

function accessElementInArray(arr, arrIndex) {
  return arr[arrIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0,arr.length-1)
}
