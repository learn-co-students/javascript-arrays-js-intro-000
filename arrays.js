var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

/////////////////////////////////////////////

function addElementToBeginningOfArray(array, element) {
  return([element, ...array]);
}



function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//////////////////////////////////////////////

function addElementToEndOfArray(array, element) {
  return([...array, element]);
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
////////////////////////////////////////////////////

function accessElementInArray(array, index) {
  return([1, 2, 3], 3);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift([0]);
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}

//////////////////////////////////////////////////////

//function destructivelyAddElementToBeginningOfArray(array) {
//  array.shift();}
