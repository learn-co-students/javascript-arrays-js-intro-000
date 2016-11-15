var chocolateBars = ["snickeers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, item) {
  return [item, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item)
  return array
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArraya(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice( 0, array.length-1 )
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
