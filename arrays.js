
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function descructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function addElementToEndOfArray(array, element){
      array.push(element);
  return [...array];
}

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return [...array];
}

function accessElementInArray(array,index){
  return array[index];
}

function removeElementFromEndOfArray(array){
   array.pop();
   return [...array];
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return [...array];
}
