var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var cities = array;
  cities = [element, ...cities];
  return cities;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var cities = array;
  cities = [...cities,element];
  return cities;
}

function destructivelyAddElementToEndOfArray(array, element){
  var len = array.length;
  array[len] = element;
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(newArray){
  //newArray.slice(1);
  return newArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,(array.length -1));
}
