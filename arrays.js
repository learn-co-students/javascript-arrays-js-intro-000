var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, e) {
  myArray = [e, ...myArray];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, e) {
  myArray.unshift(e);
  return myArray
}

function addElementToEndOfArray(myArray, e) {
  myArray = [...myArray, e];
  return myArray
}

function destructivelyAddElementToEndOfArray(myArray, e) {
  myArray.push(e);
  return myArray
}

function accessElementInArray(myArray, index) {
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(myArray){
  myArray = myArray.slice(1)
  return myArray;
}

function removeElementFromEndOfArray(myArray){
  myArray=  myArray.slice(0,myArray.length-1);
  return myArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop();
  return myArray;
}
