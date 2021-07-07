var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, sweets){
  return [sweets, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, sweets){
  chocolateBars.unshift(sweets);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, sweets){
  return [...chocolateBars, sweets];
}

function destructivelyAddElementToEndOfArray(chocolateBars, sweets){
  chocolateBars.push(sweets);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1);
  }