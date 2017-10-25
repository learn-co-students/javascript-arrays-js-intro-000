var chocolateBars=new Array();
chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
  var arr=[element,...array]
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array,element) {
  var arr= [...array,element];
  return arr;
}


function destructivelyAddElementToEndOfArray(array,element) {
 array.push(element);
  return array;
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var arr=array.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
   return array.slice(0,array.length-1);
}
