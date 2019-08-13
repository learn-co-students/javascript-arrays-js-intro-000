var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, myElement) {
  return [myElement, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, myElement) {
  chocolateBars.unshift(myElement)
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, myElement) {
  return [...chocolateBars, myElement];
}

function destructivelyAddElementToEndOfArray(chocolateBars, myElement) {
  chocolateBars.push(myElement)
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
