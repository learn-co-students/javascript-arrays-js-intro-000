var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element) {
  const arr2 = [element, ...arr]
  return arr2
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element) {
  const arr2 = [...arr, element]
  return arr2
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element)
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
  const arr2 = arr.slice(1)
  return arr2
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop(...arr)
  return arr
}

function removeElementFromEndOfArray(arr) {
  const arr2 = arr.slice(0, arr.length - 1)
  return arr2
}
