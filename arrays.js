var chocolateBars = [
"snicker",
"hundred grand",
"kitkat",
"skittles"
];

function addElementToBeginningOfArray (array, element) {
  chocolateBars = [element, ...array];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return chocolateBars;
}

function addElementToEndOfArray (array, element) {
  chocolateBars = [...array, element];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return chocolateBars;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  chocolateBars = array.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  chocolateBars = array.slice(0, array.length -1);
  return chocolateBars;
}
