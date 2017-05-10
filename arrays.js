var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
   return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array
}

function removeElementFromEndOfArray(array){
   return array.slice(0, array.length-1);
}

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function addElementToEndOfArray(array, element){
   array.push(element);
   return array 
}

function destructivelyAddElementToBeginningOfArray(array){
  array.unshift(element);
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array
}