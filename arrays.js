var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolateString = "crunch"

function addElementToBeginningOfArray(chocolateBars, chocolateString){
  return [chocolateString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateString){
  chocolateBars.unshift(chocolateString);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, chocolateString){
  return [...chocolateBars, chocolateString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolateString){
  chocolateBars.push(chocolateString)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return (chocolateBars[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
