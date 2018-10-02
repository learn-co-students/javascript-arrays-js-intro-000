var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(array, element) {
  return [element].concat(array);
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array, element) {
  return array.concat([element]);
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

var accessElementInArray = function(array, index) {
  return array[index];
}

var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1);
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift();
  return array;
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length - 1);
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
}
