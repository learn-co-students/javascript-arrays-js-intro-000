var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(arr, item) {
  return [item, ...arr]
}

function descructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item)
  return arr
}

function addElementToEndOfArray(arr, item) {
  return [...arr, item]
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item)
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length - 1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}
