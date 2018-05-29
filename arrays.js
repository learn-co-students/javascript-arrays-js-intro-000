var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, addElement) {
  arr = [addElement, ...arr]
  return arr

}

function destructivelyAddElementToBeginningOfArray(arr, addElement) {
  arr.unshift(addElement)
  return arr
}

function addElementToEndOfArray(arr, addElement) {
  arr = [...arr, addElement]
  return arr
}

function destructivelyAddElementToEndOfArray(arr, addElement) {
  arr.push(addElement)
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
  arr = arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1)
  return arr
}
