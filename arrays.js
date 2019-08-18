var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(arr, elem) {
  var arr2
  arr2 = [elem, ...arr]
  return arr2

}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem) {
  var arr2
  arr2 = [...arr, elem]
  return arr2
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var arr4
  arr4 = arr.slice(1)
  return arr4
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(array) {
  var arr5
  arr5 = array.slice(0, array.length - 1)
  return arr5
}
