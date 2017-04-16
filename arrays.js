var chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
];

function addElementToBeginningOfArray(array1, element) {
  var array2 = [element, ...array1];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array1, element) {
  array1.unshift(element);
  return array1;
}

function addElementToEndOfArray(array1, element) {
  return [...array1, element];
}

function destructivelyAddElementToEndOfArray(array1, element) {
  array1.push(element);
  return array1;
}

function accessElementInArray(array1, index) {
  return array1[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1) {
  return array1.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array1) {
  array1.pop();
  return array1;
}

function removeElementFromEndOfArray(array1) {
  return array1.slice(0,array1.length -1);
}