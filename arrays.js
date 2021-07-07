var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, twix){
  return [twix, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(chocolateBars, twix){
  return[...chocolateBars, twix];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
   return array[index]
 }

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array
 }

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
