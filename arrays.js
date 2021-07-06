var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]
var y = 'twix'
var x = 'milky way'

function addElementToBeginningOfArray(chocolateBars,y){
  return [y, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,y){
  chocolateBars.unshift(y)
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,x){
  return [...chocolateBars, x]
}

function destructivelyAddElementToEndOfArray(chocolateBars,x){
  chocolateBars.push(x)
  return chocolateBars;
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  var newArray = chocolateBars.slice(0, chocolateBars.length - 1)
  return newArray;
}
