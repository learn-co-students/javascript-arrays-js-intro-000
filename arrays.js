var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arrayName, elementName) {
  var newArray = [elementName, ...arrayName]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(arrayName, elementName) {
  arrayName.unshift(elementName)
  return arrayName
}
function addElementToEndOfArray(arrayName, elementName) {
  var newArray = [...arrayName, elementName]
  return newArray
}
function destructivelyAddElementToEndOfArray(arrayName, elementName) {
  arrayName.push(elementName);
  return arrayName
}
function accessElementInArray(arrayName, index) {
  return arrayName[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arrayName) {
  arrayName.shift();
  return arrayName;
}
function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(arrayName) {
  arrayName.pop();
  return arrayName;
}
function removeElementFromEndOfArray(arrayName) {
  var newArray = arrayName.slice(0, arrayName.length - 1);
  return newArray;
}
