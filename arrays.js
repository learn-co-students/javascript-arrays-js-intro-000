var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = function(array, element){
  return array = [element, ...array]
}
var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array;
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
}
var addElementToEndOfArray = function(array, element){
  return array = [...array, element]
}
var accessElementInArray = function(array, index){
  return array[index];
}
var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop()
  return array;
}
var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
  return array;
}
var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length - 1)

}
var removeElementFromBeginningOfArray = function(array){
  return array.slice(-2);
}
