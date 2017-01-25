var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elements) {
  const array2 = [elements, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, elements){
  array.unshift(elements);
  return array;
}

function addElementToEndOfArray(array, elements) {
  const array2 = [...array, elements];
  return array2;
}

function destructivelyAddElementToEndOfArray(array, elements){
  array.push(elements);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array;
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array;
}