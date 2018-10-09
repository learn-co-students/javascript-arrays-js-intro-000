var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(x,y){
  var myArray = x;
  var myNewArray = [y, ...myArray];
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(x,y){
  var myArray = x;
  myArray.unshift(y);
  return myArray;
}

function addElementToEndOfArray(x,y){
  var myArray = x;
  myArray = [...myArray, y];
  return myArray;
}

function destructivelyAddElementToEndOfArray(x,y){
  var myArray = x;
  myArray.push(y);
  return myArray;
}

function accessElementInArray(x,y){
  var myArray = x;
  var myArrayPosition = y;
  return myArray[myArrayPosition];
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  var myArray = x;
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(x) {
   var myArray = x;
   myArray = myArray.slice(1);
   console.log(myArray);
   return myArray;
}

function destructivelyRemoveElementFromEndOfArray(x) {
  var myArray = x;
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(x) {
  var myArray = x;
  myArray = myArray.slice(0, myArray.length - 1);
  return myArray;
}
