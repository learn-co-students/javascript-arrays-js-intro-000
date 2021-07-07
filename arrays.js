var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(nameArray, elementToAdd){
  var newArray = [elementToAdd, ...nameArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(nameOfArray, elementToAdd){
  nameOfArray.unshift(elementToAdd);
  return nameOfArray;
}

function addElementToEndOfArray(nameArray, elementToAdd){
  var newArray = [...nameArray, elementToAdd];
  return newArray;
}

function destructivelyAddElementToEndOfArray(nameOfArray, elementToAdd){
  nameOfArray.push(elementToAdd);
  return nameOfArray;
}

function accessElementInArray(nameArray, indexElement){
  return nameArray[indexElement];
}

function destructivelyRemoveElementFromBeginningOfArray(nameOfArray){
  nameOfArray.shift();
  return nameOfArray;
}

function removeElementFromBeginningOfArray(nameArray){
  var newArray = nameArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(nameOfArray){
  nameOfArray.pop();
  return nameOfArray;
}

function removeElementFromEndOfArray(nameArray){
  var newArray = nameArray.slice(0, nameArray.length-1);
  return newArray;
}
