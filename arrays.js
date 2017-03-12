var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
var array2 = array.unshift(element)
return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
var array2 = array.push(element)
return array
}

function accessElementInArray(array, index) {
  return array[String(index)]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array2 = array.slice(1)
  return array2
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array2 = array.slice(0, array.length-1)
  return array2
}
