var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var testarray = array;
  return [element, ...testarray];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var testarray = array;
  testarray.unshift(element);
  return testarray;
}

function addElementToEndOfArray(array, element) {
  var testarray = array;
  return [...testarray, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  var testarray = array;
  testarray.push(element);
  return testarray;
}

function accessElementInArray(array, index) {
  var testarray = array;
  return testarray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var testarray = array;
  testarray.shift();
  return testarray;
}

function removeElementFromBeginningOfArray(array) {
  var testarray = array;
  return testarray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var testarray = array;
  testarray.pop()
  return testarray
}

function removeElementFromEndOfArray(array) {
  var testarray = array;
  return testarray.slice(0, testarray.length - 1)
}
