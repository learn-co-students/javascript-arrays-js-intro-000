var chocolateBars1 = "snickers"
var chocolateBars2 = "hundred grand"
var chocolateBars3 = "kitkat"
var chocolateBars4 = "skittles"
var chocolateBars = [chocolateBars1, chocolateBars2, chocolateBars3, chocolateBars4];

//var section end

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function removeElementFromBeginningOfArray(array) {

}
function removeElementFromEndOfArray(array) {

}
function destructivelyRemoveElementFromBeginningOfArray(array) {

}
function accessElementInArray(array, index) {

}
function destructivelyAddElementToEndOfArray(array, element) {

}
