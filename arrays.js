var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(arr, item) {
  var newArr = [item, ...arr]
  return newArr
}

function descructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item)
  return arr
}

function addElementToEndOfArray(arr, item) {
  var newArr = [...arr, item]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item)
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1)
  return newArr
}

function removeElementFromEndOfArray(arr) {
  var newArr = arr.slice(0, arr.length - 1)
  return newArr
}

function accessElementInArray(arr, index) {
  return arr[index]
}
