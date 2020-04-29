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

var chocolateBars = ["snickers", "hundred grand", "kitkat'", "skittles"]

function addElementToBeginningOfArray(a, b){
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a, b){
  return [...a, b]
}

function destructivelyAddElementToEndOfArray(a, b){
  a.push(b)
  return a
}

function accessElementInArray(a, b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(a){
 a.pop()
 return a
}

function removeElementFromEndOfArray(a){
  return a.slice(0, a.length - 1)
}
