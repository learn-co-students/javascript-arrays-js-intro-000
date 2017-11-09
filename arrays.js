var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(originalArray, addedElement){
  var newerArray = [addedElement, ...originalArray];
  return newerArray;
}

function destructivelyAddElementToBeginningOfArray(originalArray, addedElement){
  originalArray.unshift(addedElement);
  return originalArray;

}

function addElementToEndOfArray(originalArray, addedElement){
  var newerArray = [...originalArray, addedElement]
  return newerArray;
}

function destructivelyAddElementToEndOfArray(originalArray, addedElement) {
  originalArray.push (addedElement);
  return originalArray;
}

function accessElementInArray(originalArray, elementIndex) {
  return originalArray[elementIndex];
}

function destructivelyRemoveElementFromBeginningOfArray (originalArray) {
  originalArray.shift();
  return originalArray;
}

function removeElementFromBeginningOfArray (originalArray){
  var newerArray = originalArray.slice(1);
  return newerArray;
}

function destructivelyRemoveElementFromEndOfArray (originalArray){
  originalArray.pop();
  return originalArray;
}

function removeElementFromEndOfArray (originalArray){
  var newerArray = originalArray.slice(0, originalArray.length - 1);
  return newerArray;
}
