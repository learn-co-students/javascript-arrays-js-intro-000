// add element to beginning
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

 function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
 }

 addElementToBeginningOfArray(chocolateBars, "sour patch");

// destructively add element to beginning

 function destructivelyAddElementToBeginningOfArray(array, element) {
     array.unshift(element);
     return array
 }

 destructivelyAddElementToBeginningOfArray(chocolateBars, "Honey Bunches of Oats");

// add element to end
var goodFood = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToEndOfArray(array, element) {
   return [...array, element];

}

addElementToEndOfArray(goodFood, "sour patch");

// destructively add element to end
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array
}

destructivelyAddElementToEndOfArray(goodFood, "Honey Bunches of Oats");

// access element in array by index
var dogs = [
  "german shepard",
  "corgie",
  "cat",
  "weimaraner"
]
function accessElementInArray(array, index) {
  return array[index];
}

accessElementInArray(dogs, 2);

//remove from beginning destructively

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
destructivelyRemoveElementFromBeginningOfArray(dogs);

// remove element from beginning of array non destructive
var friends = [
  "leti",
  "jay",
  "cat",
  "jen"
]
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

removeElementFromBeginningOfArray(friends);

// remove element from end of array destructive
var pets = [
  "bird",
  "kangaroo",
  "chipmunk",
  "turtle"
]
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

destructivelyRemoveElementFromEndOfArray(pets);

// remove element from end non destructive
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

removeElementFromEndOfArray(pets);
