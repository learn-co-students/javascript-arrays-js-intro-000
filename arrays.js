var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(arrays, element){

  return [element, ...arrays];
}
function destructivelyAddElementToBeginningOfArray(arrays,element){
arrays.unshift(element);
  return arrays;
}


function addElementToEndOfArray(arrays,element){
  return [...arrays,element];
}

function destructivelyAddElementToEndOfArray(arrays, element){
arrays.push(element);
  return arrays;
}

function accessElementInArray(arrays,index){
  return arrays[index];
}


function destructivelyRemoveElementFromBeginningOfArray(arrays){
  return arrays.shift();
}
function removeElementFromBeginningOfArray(arrays){
  var test = arrays.slice(1);
  return test;
}
function destructivelyRemoveElementFromEndOfArray(arrays){
  arrays.pop();
  return arrays;
}
function removeElementFromEndOfArray(arrays){
  var test = arrays.slice(0,arrays.length -1);
  return test;
}
