var chocolateBars = ["snickers",
 "hundred grand", "kitkat", "skittles"]
var element = 'foo'
const arrayz = []
function addElementToBeginningOfArray(arrayz, element) {
const arrayzz = [element,...arrayz]
  return arrayzz
}

function destructivelyAddElementToEndOfArray(arrayz, element) {
  arrayz.push(element)
  return arrayz
}


function addElementToEndOfArray(arrayz, element) {
  const arrayzz = [...arrayz, element]
  return arrayzz
}

function destructivelyAddElementToBeginningOfArray(arrayz, element) {
  arrayz.unshift(element)
  return arrayz
}
var array = [1,2,3]
var index
function accessElementInArray(array, index) {
  return array[index]
}
 function removeElementFromBeginningOfArray(array, index) {
   array.shift()
   return array
 }

function removeElementFromEndOfArray(array, index) {
  array.pop()
  return array
}
