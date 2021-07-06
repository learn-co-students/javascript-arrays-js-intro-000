
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var chips = 'foo';

function addElementToBeginningOfArray(chocolateBars, chips){
  return [chips, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chips){
  chocolateBars.unshift(chips);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, chips){
    return [...chocolateBars, chips];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chips){
  chocolateBars.push(chips);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
    return chocolateBars.slice(0, chocolateBars.length - 1);
}
