var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newArray = ["1", ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element ) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, "foo"]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return array
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
