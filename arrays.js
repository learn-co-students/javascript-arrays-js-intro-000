var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item) {
  var newArray = array;
  newArray = [item, ...newArray]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element) {
  var newArray = array;
  newArray = [...newArray, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function accessElementInArray(array, index) {
  var newArray = array
  return newArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    const newArray = array;
    newArray.shift()
    return newArray;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array;
  newArray = newArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var newArray = array;
  newArray.pop();
  return newArray;
}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
}
