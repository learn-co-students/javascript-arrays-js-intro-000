var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)

}

function addElementToEndOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(array.length)
}
