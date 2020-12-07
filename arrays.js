var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, reeses) {
 return [reeses, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, reeses) {
chocolateBars.unshift(reeses)
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, reeses) {
return [...chocolateBars, reeses]
}

function destructivelyAddElementToEndOfArray(chocolateBars, reeses) {
  chocolateBars.push(reeses)
  return chocolateBars
}
function accessElementInArray(array, index) {
  return (array[index])
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
 return chocolateBars.slice(0, chocolateBars.length -1)
}
