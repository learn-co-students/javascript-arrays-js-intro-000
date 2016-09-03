var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
function addElementToBeginningOfArray(array,a){
  return [a,...array];
};
function destructivelyAddElementToBeginningOfArray (array, b){
  array.unshift(b);
  return array;
};
function addElementToEndOfArray(array,x){
  return[...array,x];
};
function destructivelyAddElementToEndOfArray(array,y){
  array.push(y);
  return array;
};
function accessElementInArray(array,index){
  return array[index];
};
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
};
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
};
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
};
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
};
