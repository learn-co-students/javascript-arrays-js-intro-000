var chocolateBars = ['snickers', 'hunder grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
   return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var element = 'foo';
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var array = [1];

  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  element = 'foo';
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return  array = array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop();
   return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}