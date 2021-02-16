var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, newElement){
  var newarray = [newElement, ...array]
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function addElementToEndOfArray(array, newElement){
  var newarray = [...array, newElement]
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, newElement){
  array.push(newElement)
  return array
}


function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
   var newarray = array.slice(-2);
   return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length - 1)
  return newarray;
}

// these fuctions mutate the Array
// ".push" to add to the end of an Array
// .unshift to add to the begining of an Array
// .shift() will return the removed element (the default value is the first)
// .pop remve the a element frome the end of an Array


// these operator's will create a new Array in place
// var newarray = ["klik's", ...chocolateBars] this will create a new array with klik's added at index 0
// array.slice() this will remove frome where you specify


