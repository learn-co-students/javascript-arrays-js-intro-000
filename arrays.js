var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  // array = [element, ...array];
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}

function accessElementInArray(array, index){
  return array[index];
}
