var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
//  'tomato',
//  'garlic',
//  'olive oil',
//  'basil',
  'oregano'
]

var index = 0

function addElementToBeginningOfArray(grilledCheeseIngredients,tomatoSauceIngredients) {
  return [tomatoSauceIngredients, ...grilledCheeseIngredients];
}

function destructivelyAddElementToBeginningOfArray(grilledCheeseIngredients,tomatoSauceIngredients) {
  grilledCheeseIngredients.unshift(tomatoSauceIngredients)
  return grilledCheeseIngredients
}

function addElementToEndOfArray(grilledCheeseIngredients, tomatoSauceIngredients){
  return [...grilledCheeseIngredients, tomatoSauceIngredients];
}

function destructivelyAddElementToEndOfArray(grilledCheeseIngredients, tomatoSauceIngredients){
  grilledCheeseIngredients.push(tomatoSauceIngredients);
  return grilledCheeseIngredients;
}

function accessElementInArray(grilledCheeseIngredients, index){
  return grilledCheeseIngredients[index];
}

function destructivelyRemoveElementFromBeginningOfArray(grilledCheeseIngredients){
  grilledCheeseIngredients.shift();
  return grilledCheeseIngredients;
}

function removeElementFromBeginningOfArray(grilledCheeseIngredients){
  return grilledCheeseIngredients.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(grilledCheeseIngredients){
  grilledCheeseIngredients.pop();
  return grilledCheeseIngredients;
}

function removeElementFromEndOfArray(grilledCheeseIngredients){
  return grilledCheeseIngredients.slice(0, grilledCheeseIngredients.length - 1);
}
