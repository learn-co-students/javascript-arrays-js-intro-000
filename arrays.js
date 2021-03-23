var chocolateBars = ["snickers", "hundres grand", "kitkat", "skkitles"]

function addElementToBeginningOfArray(array, element) {
  var array = [element, ...array]
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;  //mutable
}

function addElementToEndOfArray(array, element) {
  var array = [...array, element];  // immutable
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);  //mutable
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;  // mutated
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);   // immutable. should not alter original array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1); // Immutable  .pop() mutable
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); // mutable
  return array;
}

//items.splice(1, 1)  at index 1, remove 1 item. Immutable
//item.splice(1, 1, 6, 7) at index 1, remove 1, add 6 and 7
