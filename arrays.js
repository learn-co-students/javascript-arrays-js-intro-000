var grilledCheese = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'garlic',
  'tomato'
]

var tomatoSauce = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...1];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var newArray = [...1, element];
  return newArray; 
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push('foo'); 
}
