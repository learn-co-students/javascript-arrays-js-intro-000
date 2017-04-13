var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array];
 return(newArray);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  newArray2 = [...array,element];
  return newArray2;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length-1);
  return newArray;
}
