var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, para) {
  var secondArray = array;
  secondArray = [para, ...array];
  return secondArray;
}

function destructivelyAddElementToBeginningOfArray(array, para) {
  array.unshift(para);
  return array;
}

function addElementToEndOfArray(array, para) {
  var myOtherArray = array;
  myOtherArray = [...array, para];
  return myOtherArray;
}

function destructivelyAddElementToEndOfArray(array, para) {
  var myArray = array;
  array.push(para);
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var arrayOne = array;
  arrayOne.shift();
  return arrayOne;
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var thisArr = array;
  thisArr.pop();
  return thisArr;
}

function removeElementFromEndOfArray(array) {
  var newArr = array;
  newArr = array.slice(0, array.length - 1);
  return newArr;
}
