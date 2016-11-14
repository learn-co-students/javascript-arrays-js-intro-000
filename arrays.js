var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element){
  return newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  return newArray = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  indexedVar = array[index];
  return indexedVar
}

function removeElementFromBeginningOfArray(array){
  array1 = array.slice(1);
  return array1
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromEndOfArray(array){
  array1 = array.slice(0, array.length-1);
  return array1
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop();
  return array
}
