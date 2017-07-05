var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(myArray, elementToAdd){
  return [elementToAdd, ...myArray];
}

function destructivelyAddElementToBeginningOfArray(myArray, elementToAdd){
  myArray.unshift(elementToAdd);
  return myArray;
}

function addElementToEndOfArray(myArray, newElement){
  return [...myArray, newElement];
}

function destructivelyAddElementToEndOfArray(myArray, newElement){
  myArray.push(newElement);
  return myArray;
}

function accessElementInArray(array, index){
  return array[index];
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
  return array.slice(0, array.length-1);
}
