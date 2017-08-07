var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (myArray, myElement) {
  return ([myElement, ...myArray])
}

function destructivelyAddElementToBeginningOfArray (myArray, myElement) {
  myArray.unshift(myElement);
  return myArray;
}

function addElementToEndOfArray (myArray, myElement) {
  return ([...myArray, myElement])
}

function destructivelyAddElementToEndOfArray (myArray, myElement) {
  myArray.push(myElement);
  return myArray;
}

function accessElementInArray(myArray, myIndex) {
  return myArray[myIndex];
}

function destructivelyRemoveElementFromBeginningOfArray (myArray) {
  myArray.shift();
  return myArray
}

function removeElementFromBeginningOfArray (myArray) {
  myArray = myArray.slice(1);
  return myArray;
}

function destructivelyRemoveElementFromEndOfArray (myArray, myElement) {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray (myArray) {
  myArray = myArray.slice(0, myArray.length - 1);
  return myArray;
}
