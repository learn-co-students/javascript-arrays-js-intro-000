chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  new_arr = array.slice()
  new_arr.unshift(element)
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  new_arr = array.slice()
  new_arr.push(element)
  return new_arr
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  new_arr = array.slice()
  new_arr.shift(element)
  return new_arr
}

function removeElementFromEndOfArray(array) {
  new_arr = array.slice()
  new_arr.pop()
  return new_arr
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

