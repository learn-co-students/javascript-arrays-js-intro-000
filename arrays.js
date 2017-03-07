var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(argArray, argElement) {
  var newArrayBeg = argArray;
  x = [argElement, ...x];
  return newArrayBeg;
}

function destructivelyAddElementToBeginningOfArray(argArray, argElement) {
  argArray = [argElement, ...argArray];
  return argArray;
}

function addElementToEndOfArray(argArray, argElement) {
  var newArrayEnd = argArray;
  newArrayEnd = [...argArray, argElement];
  return newArrayEnd;
}

function destructivelyAddElementToEndOfArray(argArray, argElement) {
  argArray = [...argArray, argElement];
  return argArray;
}

function accessElementInArray(argArray, argIndex) {
  return argArray[argIndex];
}