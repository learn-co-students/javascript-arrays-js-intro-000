var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "Peanut Butter";

function addElementToBeginningOfArray(chocolateBars, element) {
    NewChocolateBars = [element, ...chocolateBars];
    return NewChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element);
  return chocolateBars;
}

function addElementToEndOfArray (chocolateBars, element) {
  NewChocolateBars = [... chocolateBars, element];
  return NewChocolateBars;
}

function destructivelyAddElementToEndOfArray (chocolateBars, element) {
  chocolateBars.push(element);
  return chocolateBars;
}

var index;
function accessElementInArray (chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars) {
  newChocolateBars = chocolateBars.slice(1);
  return newChocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
chocolateBars.pop();
  newChocolateBars = chocolateBars;
  return newChocolateBars;
}
