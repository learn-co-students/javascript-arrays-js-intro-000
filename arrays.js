var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element){
  var array2 = [element, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray (array1, element) {
  array1.unshift(element);
  return array1;
}

function addElementToEndOfArray (array1, element){
  var array2 = [...array1, element];
  return array2;
}

function destructivelyAddElementToEndOfArray (array1, element) {
  array1.push(element);
  return array1;
}

function accessElementInArray (array1, index){
  return array1[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray (array1){
  var array2;
  return array2 = array1.slice(1);
}

function removeElementFromEndOfArray(array1){
  var array2;
  return array2 = array1.slice(0,array1.length-1);
}
