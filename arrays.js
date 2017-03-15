var chocolateBars = ["snickers","hundred grand","kit kat","skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array1 = array.slice(1);
  return array1;
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(-1);
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
