var chocolateBars=['snickers', 'hundred', 'grand', 'kitkat', 'skittles'];
//.push=> adds to the end of array
//.unshift=> adds to the beginning of array
//spread operator: ... => creates new array in place, rather than modifying the original one
//.pop => removes element from end of array
//.slice (inicio, fin)=> no destruye array original, igual que (...).
//.shift => removes element from beginning of array

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
};
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element){
  return [...array, element];
};
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
};

function accessElementInArray(array, index){
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
};

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
};

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
};
