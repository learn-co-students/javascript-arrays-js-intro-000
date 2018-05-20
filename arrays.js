var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inBoundArray, element) {
  var newArray = [element, ...inBoundArray];

  return newArray;
}


function destructivelyAddElementToBeginningOfArray(inBoundArray, element) {
    inBoundArray.unshift(element);

   return inBoundArray;
}

function addElementToEndOfArray(inBoundArray, element) {
  var newArray = [...inBoundArray, element]; //creates new array instead of altering existing

  return newArray;
}

function destructivelyAddElementToEndOfArray(inBoundArray, element) {
  inBoundArray.push(element);

  return inBoundArray;
}

function accessElementInArray(inBoundArray, index) {
  return inBoundArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(inBoundArray) {
  inBoundArray.shift();

  return inBoundArray;
}

function removeElementFromBeginningOfArray(inBoundArray) {
  var newArray = inBoundArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(inBoundArray) {
  inBoundArray.pop();
  return inBoundArray;
}

function removeElementFromEndOfArray(inBoundArray) {
  newArray = inBoundArray.slice(0, inBoundArray.length - 1);
  return newArray;
}
