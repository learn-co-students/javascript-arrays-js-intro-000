var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

const array = [1], element =["foo"]

function addElementToBeginningOfArray(array, element) {
return [(element), ...array] // ["foo", 1]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
return array.slice(0, array.length - 1)

}
