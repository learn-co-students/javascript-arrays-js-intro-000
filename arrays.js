var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (myArray, element) {
  var newArray = [element, ...myArray];
  return newArray;
  
}
function destructivelyAddElementToBeginningOfArray (secondArray, element) {
  secondArray.unshift(element);
  return secondArray;
  
}
function addElementToEndOfArray (coolArray, icyElement) {
  var icyArray = [...coolArray, icyElement];  
  return icyArray;
  
}
function destructivelyAddElementToEndOfArray (warmArray, hotElement) {
  warmArray.push(hotElement);
  return warmArray;
}
function accessElementInArray (bigArray, indexkun) {
  console.log(bigArray[indexkun]);
  return bigArray[indexkun];
  
}
function destructivelyRemoveElementFromBeginningOfArray (myArray) {
  myArray.shift();
  return myArray;
}
function removeElementFromBeginningOfArray (myArray) {
  myArray = myArray.slice(1);
  return myArray;
}
function destructivelyRemoveElementFromEndOfArray (myArray) {
  myArray.pop();
  return myArray;
}
function removeElementFromEndOfArray (myArray) {
  myArray = myArray.slice(0, myArray.length -1);
  return myArray;
}
