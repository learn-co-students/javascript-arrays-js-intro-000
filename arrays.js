var ingredient1 = 'bread';
var ingredient2 = 'mild cheese';
var ingredient3 = 'sharp cheese';
var ingredient4 = 'butter';
var ingredient5 = 'tomato';
var ingredient6 = 'garlic';

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
];
Object.keys([1, 2, 3]);
var items = [1, 2, 3, 4, 5];
var newItems = [...items.slice(0,2), ...items.slice(3)];
console.log(newItems);
function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  var newArray = arr.pop();
  return arr;
}
function removeElementFromBeginningOfArray(arr) {
  var newArray = arr.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var shiArr = arr.shift();
  return arr;
}
function accessElementInArray(arr, ind) {
  return arr[ind];
}
function addElementToBeginningOfArray(arr, ele) {
  var newArray = [ele, ...arr];
  return newArray;
  //return arr.unshift(ele);
}
function destructivelyAddElementToBeginningOfArray(arr, ele) {
  var newArray = arr.unshift(ele);
  return arr;
  //return [arr, ...ele];
}
function addElementToEndOfArray(arr, ele) {
  var newArray = [...arr, ele];
  return newArray;
}
function destructivelyAddElementToEndOfArray(arr, ele) {
  var newArray = arr.push(ele);
  return arr;
}
