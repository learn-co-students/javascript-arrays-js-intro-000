var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolate = "foo"

function addElementToBeginningOfArray(chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate){
  chocolateBars.unshift(chocolate);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate){
  chocolateBars.push(chocolate);
  return chocolateBars
}
function accessElementInArray(chocolateBars, index){
  return (chocolateBars[2]);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift(chocolate);
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(-2)
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop(chocolate);
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length-1);
  return chocolateBars
}
