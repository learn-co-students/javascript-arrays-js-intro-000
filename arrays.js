var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  ];

function addElementToBeginningOfArray(array, element) {
  var newArray = array.slice();
  newArray.unshift(element);
  return newArray;
}

addElementToBeginningOfArray([2, 3], 1);

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

destructivelyAddElementToBeginningOfArray([2, 3], 1);

function addElementToEndOfArray (array, element){
  var newArray = array.slice();
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;

}



