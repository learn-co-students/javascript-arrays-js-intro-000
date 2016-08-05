var chocolateBars = new Array;
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var addElementToBeginningOfArray(array,element){
  var newArray = array.unshift(element);
}

var destructivelyAddElementToBeginningOfArray = function(array2,element){
  array2.unshift(element);
}


var addElementToEndOfArray = function(array3,element){
  var newArray3 = array3.push(element);
}


var destructivelyAddElementToEndOfArray = function(array4,element){
  array4.push(element);
}
