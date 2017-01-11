var chocolateBars;

chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (newArray, newelement){
  return[newelement, ...newArray];
};

function descructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
};

function addElementToEndOfArray (array, element){
  return[...array, element];
}

function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array
}

function accessElementInArray (array, index){
  return array[index];
}

function removeElementFromBeginningOfArray (array){
  array.shift();
  return array
}
function removeElementFromEndOfArray (array){
  array.pop();
  return array
}
