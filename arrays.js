var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(x, element) {
  x.unshift(element);
  return x
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}
function removeElementFromBeginningOfArray(array) {
    var i = array.slice(1)
    return i
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var y = array.slice(0, array.length -1)
  return y;
}
