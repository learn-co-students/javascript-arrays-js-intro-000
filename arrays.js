var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (myArray, element){
  var myArray = [element, ... myArray];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, element){

  myArray.unshift(element);
  return myArray;
  
}

function addElementToEndOfArray (myArray, element){
  var myArray2 = [...myArray, element];
  return myArray2;
}

function destructivelyAddElementToEndOfArray(myArray, element){
  myArray.push(element);
  return myArray;
}

function accessElementInArray(myArray, index){
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift();
  return myArray;
  
}

function removeElementFromBeginningOfArray(myArray){
  return myArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray){
  return myArray.slice(0, myArray.length -1);
}

