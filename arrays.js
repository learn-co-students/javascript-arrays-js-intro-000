var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray (array, element) {
  const myOtherArray = [element, ...array];

  return myOtherArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array,element) {
  const newArray = [...array, element];
  return Array;
}

function destructivelyAddElementToEndOfArray (array,element) {

  array.push(element);
  return array;
}




function accessElementInArray (array, index) {
  var access = [1,2,3];
  return access[2];
}


function removeElementFromBeginningOfArray (array,element){
  var removeMe = [1,2,3];
  removeMe = removeMe.slice(1);
  return removeMe;
}
function removeElementFromEndOfArray (array,element){
  var removeMeNow = [1,2];
  removeMeNow.slice(-1);
  return removeMeNow;
}
