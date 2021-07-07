
var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array, element){

return [element,...myArray];

}

function destructivelyAddElementToBeginningOfArray(array, element){

array.unshift(element);
return array;

}

function accessElementInArray(array, index){

return array[myNumber];

}

function destructivelyRemoveElementFromBeginningOfArray(array){

  array.shift();

  return array;
}

function removeElementFromBeginningOfArray(array){

  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(mutateArray){
mutateArray.pop();
return mutateArray;
}

function removeElementFromEndOfArray(array){

array.slice(0, array.length - 1);
return array;

}
