var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (myArray, myElement) => {
  myNewArray = [myElement, ...myArray];
  return myNewArray;
}

var destructivelyAddElementToBeginningOfArray = (myArray, myElement) => {
  myArray.unshift(myElement);
  return myArray;
}

var addElementToEndOfArray = (myArray, myElement) => {
  myNewArray = [...myArray, myElement];
  return myNewArray;
}

var destructivelyAddElementToEndOfArray = (myArray, myElement) => {
  myArray.push(myElement);
  return myArray;
}

function accessElementInArray(myArray, i) {
  return myArray[i];
}

var destructivelyRemoveElementFromBeginningOfArray = myArray => {
  myArray.shift();
  return myArray;
}

var removeElementFromBeginningOfArray = myArray => {
  return myArray.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = myArray => {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length-1);
}
