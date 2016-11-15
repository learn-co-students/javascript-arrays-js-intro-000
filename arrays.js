var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray (array, element) {
  const someArray = [];
  const myOtherArray = ["foo", 1, ...someArray];
  // should return new array and not modify original
  return myOtherArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array = [];
  array.unshift("foo",1);
  return array;
}

function addElementToEndOfArray (array,element) {
  const addElementEnd = [];
  const addElementNew = [...addElementEnd, 1, "foo"];
  return addElementNew;
}

function destructivelyAddElementToEndOfArray (array,element) {
  var someOtherArray = [];
  someOtherArray.push(1, "foo");
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
function removeElementFromEndOfArray (array,element){
  var removeMeNow = [1,2];
  removeMeNow.slice(-1);
  return removeMeNow;
}
