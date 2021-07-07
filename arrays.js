var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(anotherBar, Barz) {
  return [Barz, ...anotherBar]
}
function destructivelyAddElementToBeginningOfArray(anotherBar, Barz) {
  anotherBar.unshift(Barz);
  return anotherBar
}
function addElementToEndOfArray(anotherBar, Barz) {
  return [...anotherBar, Barz]
}
function destructivelyAddElementToEndOfArray(anotherBar, Barz) {
  anotherBar.push(Barz);
  return anotherBar
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyremoveElementFromBeginningOfArray(anotherBar) {
  anotherBar.shift();
  return anotherBar
}
function removeElementFromBeginningOfArray(anotherBar) {
  return anotherBar.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(anotherBar) {
  anotherBar.pop();
  return anotherBar
}
function removeElementFromEndOfArray(anotherBar) {
  return anotherBar.slice(0, anotherBar.length -1)
}
