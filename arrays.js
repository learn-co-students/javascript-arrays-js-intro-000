var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,item){
  return [item,...array];
}

function destructivelyAddElementToBeginningOfArray(array, item){
  return array.unshift(item);
}

function addElementToEndOfArray(array,item){
  return [...array,time];
}

function destructivelyAddElementToEndOfArray(array, item){
  array.push(item);
  return array;
}

function accessElementInArray(array,element){
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
