var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array,element) {
array2 = [element, ...array];
return array2;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
   array.unshift(element);
return array;
}

function addElementToEndOfArray(array,element) {
array3 = [...array, element]
return array3;
}

function destructivelyAddElementToEndOfArray(array,element) {
   array.push(element);
return array;
}

function accessElementInArray(array, index) {
  array[index];
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array4 = array.slice(1);
  return array4;

}

function removeElementFromEndOfArray(array) {
  array4 = array.slice(1);
  return array4;

}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;

}
