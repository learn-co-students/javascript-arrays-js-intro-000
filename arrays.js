var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement) {
  var myArray;
  myArray = [anElement, ...anArray];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement) {
  anArray.unshift(anElement);
  return anArray;
}

function addElementToEndOfArray(anArray, anElement) {
  var myArray;
  myArray = [...anArray, anElement];
  return myArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement) {
  anArray.push(anElement)
  return anArray;
}

function accessElementInArray(anArray, anIndex) {
  return anArray[anIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(anArray) {
  anArray.shift();
  return anArray;
}

function removeElementFromBeginningOfArray(anArray) {
  return anArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(anArray) {
  anArray.pop();
  return anArray;
}

function removeElementFromEndOfArray(anArray) {
  return anArray.slice(0, anArray.length - 1);
}
