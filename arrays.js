var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

chocolateBars.push('candy');
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element) {
  //add in the beginning
  //return the whole new array, not modify new
  const newarr1 = [array];
  return newarr1mod = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  //should alter the origial array
  array.push(element);
  return array;
}

function accessElementInArray(array, ind){
  return array[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
  //return newarr4;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}
