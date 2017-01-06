var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  
]

function addElementToBeginningOfArray(newArray, element1) {
  var finalArray = [element1, ...newArray]
  return finalArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
    return array
}
function addElementToEndOfArray(array, element) {
  var finalArray = [...array, element]
  return finalArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array) {
  var slicedUpArray = array.slice(1)
  return slicedUpArray
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray(array) {
  var killFinalArray = array.slice(0, array.length - 1)
  return killFinalArray
}
