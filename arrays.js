var chocolateBars = ['snickers' , 'hundred grand', 'kitkate', 'skittles'];

function addElementToBeginningOfArray(inputArray, addedElement) {
  newArray = [addedElement, ...inputArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(inputArray, addedElement) {
  inputArray.unshift(addedElement);
  return inputArray;
}

function accessElementInArray(inputArray, inputIndex) {
  return inputArray[inputIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(inputArray) {
  inputArray.shift();
  return inputArray;
}

function removeElementFromBeginningOfArray(inputArray) {
  var outputArray = inputArray.slice(1);
  return outputArray;
}

function destructivelyRemoveElementFromEndOfArray(inputArray) {
  inputArray.pop();
  return inputArray;
}

function removeElementFromEndOfArray(inputArray) {
  return inputArray.slice(0, inputArray.length - 1);
}

function addElementToEndOfArray(inputArray, addedElement) {
  var outputArray = [...inputArray, addedElement];
  return outputArray;
}

function destructivelyAddElementToEndOfArray(inputArray, addedElement) {
  inputArray.push(addedElement);
  return inputArray;
}
