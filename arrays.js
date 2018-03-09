var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elem){
  var newArray = [elem, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem);
  return array;
}

function addElementToEndOfArray(array, elem){
  var newArray = [...array, elem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, elem){
  array.push(elem);
  return array;
}

function accessElementInArray(array, index){
  return(array[index]);
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
