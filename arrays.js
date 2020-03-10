

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
    var newArray = [element, ...array];
    return newArray;

}

function destructivelyAddElementToBeginningOfArray(array, element) {

   array.unshift(element);
   return array;
/*  for (i = 1; i <= array.length - 1; i ++){
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array; */
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array[array.length] = element;
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var discarded = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
