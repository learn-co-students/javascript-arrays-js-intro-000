var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function(array, element){
  var blue = [element, ...array];
  return blue;
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array, element){
  var end = [...array, element];
  return end;
}

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array;
}

var accessElementInArray = function(array, index){
  var test = [1,2,3,4];
  console.log(test[2]);
  return test[2]
}

var removeElementFromBeginningOfArray= function(array){
  array.shift();
  return array
}

var removeElementFromEndOfArray = function(array){
  var removed = array.slice(0, array.length -1 );
  return removed
}
