var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function (array, element) {
return [element, ...array]
}
addElementToBeginningOfArray();
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array;

}
destructivelyAddElementToBeginningOfArray();
function addElementToEndOfArray(array, element) {
  return [...array, element]

}
addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}
destructivelyAddElementToEndOfArray();
function accessElementInArray(array, index) {
 return array[index];
}
accessElementInArray();
function destructivelyRemoveElementFromBeginningOfArray(array) {
  //  array.slice(1);
  array.shift()
  return array;
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)

}
function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
return array;
}
function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length - 1)

}
