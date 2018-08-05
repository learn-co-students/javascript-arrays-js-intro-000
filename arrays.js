var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(firstArray=[],element){
  var originalArray = firstArray;
  var newArray = [element,...originalArray];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(secondArray=[],secondElement){
  var beginArray = secondArray;
  beginArray.unshift(secondElement);
  return beginArray
}

function addElementToEndOfArray(thirdArray=[],beganElement){
  var beganArray = thirdArray;
  var newBeganArray = [...beganArray,beganElement];
  return newBeganArray
}

function destructivelyAddElementToEndOfArray(fourthArray=[],begunElement){
  var begunArray = fourthArray;
  begunArray.push(begunElement);
  return begunArray
}

function accessElementInArray(fifthArray=[],index) {
  var becomeArray = fifthArray;
  return becomeArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(sixthArray=[]){
  var becameArray = sixthArray;
  becameArray.shift();
  return becameArray
}

function removeElementFromBeginningOfArray(seventhArray=[]) {
  var comeArray = seventhArray;
  comeArrays = comeArray.slice(1);
  return comeArrays
}

function destructivelyRemoveElementFromEndOfArray(eightArray=[]) {
  var cameArray = eightArray;
  cameArray.pop();
  return cameArray
}

function removeElementFromEndOfArray(nineArray=[]) {
  var nowArray = nineArray;
  return nowArray.slice(0, nowArray.length-1);
}
