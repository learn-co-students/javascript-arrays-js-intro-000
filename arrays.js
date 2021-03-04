var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
//let chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');
function addElementToBeginningOfArray (array,el){
  //let array = [];
  let newArray = [el, ...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}
function addElementToEndOfArray(array, el){
  var newArray;
  return newArray = [...array, el];
}
function destructivelyAddElementToEndOfArray(array, el){
    array.push(el);
    return array;
}
function accessElementInArray(array, x){
   return array[x];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length -1);
  return newArray;
}
