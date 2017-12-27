var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);  // returns new array.length, so can't just return array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element); // returns new array.length, so can't return array.push(element)
  return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();  // retrns removed element--> can't return array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); // returns removed element, so can't return array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}

