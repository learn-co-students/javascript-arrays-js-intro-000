var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, anotherBar) {
  return [anotherBar, ...chocolateBars];
 } 
function destructivelyAddElementToBeginningOfArray(chocolateBars, anotherBar) {
  chocolateBars.unshift(anotherBar);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, anotherBar) {
  return [...chocolateBars, anotherBar];
}
function destructivelyAddElementToEndOfArray(chocolateBars, anotherBar) {
  chocolateBars.push(anotherBar);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift("snickers");
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
var newCandy = ["pixie stix", "dots", "twizzlers", "starburst"];
function removeElementFromEndOfArray(newCandy) {
 return newCandy.slice(0, chocolateBars.length - 2);
}




