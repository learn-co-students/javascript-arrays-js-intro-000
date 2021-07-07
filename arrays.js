var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, frosty) {
  return [frosty, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, frosty) {
  chocolateBars.unshift(frosty);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, nutrela) {
  return [...chocolateBars, nutrela];
}
function destructivelyAddElementToEndOfArray(chocolateBars, nutrela) {
   chocolateBars.push(nutrela);
   return chocolateBars;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) 
{
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