chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
  return arr
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr, ele) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}

function accessElementInArray(arr, ind) {
  return arr[ind]
}
