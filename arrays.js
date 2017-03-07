var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(argArray, argElement) {
  return [argElement, ...argArray];
}

function destructivelyAddElementToBeginningOfArray(argArray, argElement) {
  return argArray.unshift(argElement);
}

function addElementToEndOfArray(argArray, argElement) {
  return [...argArray, argElement];
}

function destructivelyAddElementToEndOfArray(argArray, argElement) {
  return argArray.push(argElement);
}

function accessElementInArray(argArray, argIndex) {
  return argArray[argIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(argArray) {
  return argArray.shift();
}

function removeElementFromBeginningOfArray(argArray) {
  return argArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(argArray) {
  return argArray.pop();
}

function removeElementFromEndOfArray(argArray) {
  return argArray.slice(0, argArray.length - 1);
}