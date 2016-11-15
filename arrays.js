var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray (array, element) {
  const someArray = [];
  const myOtherArray = ["foo", 1, ...someArray];
  // should return new array and not modify original
  return myOtherArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var addToBeginning = [];
  addToBeginning.unshift("foo", 1);
  return addToBeginning;
}

function addElementToEndOfArray (array,element) {
  const addElementEnd = [];
  const addElementNew = [...addElementEnd, 1, "foo"];
  return addElementNew;
}

function destructivelyAddElementToEndOfArray (array,element) {
  var someOtherArray = [1, "foo"];
  someOtherArray.push();
  return someOtherArray;
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
function destructivelyRemoveElementFromBeginningOfArray (array,element){
  var removeMeNow = [1,2,3];
  removeMeNow.slice(1);
  return removeMeNow;
}
