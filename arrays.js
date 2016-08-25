var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
   var newArray = [...array] //passes original array to a new varaible that holds the original array
   newArray.unshift(element); //adds element to beginning of array
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element); //will modify original array
   return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array] //passes original array to a new varaible that holds the original array
  newArray.push(element); //adds element to beginning of array
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  var newArray = [...array];
  newArray = array.slice(1);
  return newArray;
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1);
  return array;
}
