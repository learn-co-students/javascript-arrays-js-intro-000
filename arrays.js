var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, n){
  return [n, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, n){
  arr.unshift(n)
  return arr
}

function addElementToEndOfArray(arr, n){
  return [...arr, n]
}

function destructivelyAddElementToEndOfArray(arr, n){
  arr.push(n)
  return arr
}

function accessElementInArray(arr, n){
  return arr[n]
}

function destructivelyRemoveElementToBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1)
}
