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
  'garlic',
]
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var superheroines = ["catwoman", "she-hulk", "mystique"]
superheroines.push("wonder woman")
var cities = ["New York", "San Francisco"]
cities.unshift("Philadelphia")
var cities = ["New York", "San Francisco"]
cities = ["Philadelphia", ...cities]
const cats = ["Milo", "Garfield"]
const moreCats = ["Felix", ...cats]
function addElementToBeginningOfArray(array, element) {
  return ["element", ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("element")
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, "element"]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push("element")
  return array
}
var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"]
console.log(entrepreneurs[0])
var bio = " is the co-founder and editress-in-chief of the Huffington Post"
console.log(entrepreneurs[2] + bio)
function accessElementInArray(array, index) {
  console.log(array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
var iceCreams = ["chocolate", "vanilla", "raspberry"]
