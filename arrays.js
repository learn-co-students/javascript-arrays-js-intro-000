var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



const array = [1, 2, 3, 4];
var newNumArray
function addElementToBeginningOfArray(array, element) {

  array = [element, ...array]
  return array
}
addElementToBeginningOfArray(newNumArray, 'eight')


function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y)
  return x
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dove')


function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}
addElementToEndOfArray(newNumArray, 'eight')

function destructivelyAddElementToEndOfArray(x, y) {
  x.push(y)
  return x
}
destructivelyAddElementToEndOfArray(chocolateBars, 'Dove')

array = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
function accessElementInArray(array, index) {
  return array[index]
}
accessElementInArray(array, 3)

array = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray(array)


var shortArray
function removeElementFromBeginningOfArray(array) {
  return (shortArray = array.slice(1))
}
removeElementFromBeginningOfArray(array)


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray(array)


var endArray
function removeElementFromEndOfArray(array) {
  return (endArray = array.slice(0, array.length - 1))
}
removeElementFromEndOfArray(array)
