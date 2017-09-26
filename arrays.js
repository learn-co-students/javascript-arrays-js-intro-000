var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, bar) {
  return [bar, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, bar) {
  chocolateBars.unshift(bar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, bar) {
  return [ ...chocolateBars, bar];
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar) {
  chocolateBars.push(bar);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length-1)
}
