var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, n) {
  return [n, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  arr.unshift(n)
  return arr
}

function addElementToEndOfArray(arr, n) {
  return [...arr, n]
}

function destructivelyAddElementToEndOfArray(arr, n) {
  arr.push(n)
  return arr
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
