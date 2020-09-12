var chocolateBars = ["snickers", "hundred grand",
"kitkat","skittles"]

function addElementToBeginningOfArray(chocolatebars, candy){
  return [candy,...chocolatebars];
}
function destructivelyAddElementToBeginningOfArray( chocolatebars, candy){
  chocolatebars.unshift(candy);
  return chocolatebars;
}
function addElementToEndOfArray(chocolatebars, candy){
  return [...chocolatebars, candy];
}
function destructivelyAddElementToEndOfArray( array, item){
  array.push(item);
  return array;
}
function accessElementInArray(array,index){
  return array [index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
