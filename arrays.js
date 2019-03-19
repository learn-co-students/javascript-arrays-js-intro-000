function addElementToBeginningOfArray(arr, arg) {
  return [arg, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, arg) {
  arr.unshift(arg)
  return arr
}

function addElementToEndOfArray(arr, arg) {
  return [...arr, arg]
}

function destructivelyAddElementToEndOfArray(arr, arg) {
  arr.push(arg)
  return arr
}

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var arr2 = arr.slice(1)
  return arr2
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var arr2 = arr.slice(0, arr.length-1)
  return arr2
}
