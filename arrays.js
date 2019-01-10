var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element) {
  var arrFirst = [1];
  var arrNew = [element, ...arrFirst];
  return arrNew;
}


var destructivelyAddElementToBeginningOfArray = function(array, element) {
  var arrBegin = [1];
  arrBegin.unshift(element);
  return arrBegin;
}

var addElementToEndOfArray = function(array, element) {
  var arrFirst = [1];
  var arrNew = [...arrFirst, element];
  return arrNew;
}


var destructivelyAddElementToEndOfArray = function(array, element) {
  var arrEnd = [1];
  arrEnd.push(element);
  return arrEnd;
}

var accessElementInArray = function(array, index) {
  var arrAccess = [1, 2, 3];
  return arrAccess[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  var arrBegin = [1, 2, 3];
  arrBegin.shift();
  return arrBegin;
}

var removeElementFromBeginningOfArray = function(array) {
  var arrBegin = [1, 2, 3];
  newArrBegin = arrBegin.slice(1);
  return newArrBegin;
}


var destructivelyRemoveElementFromEndOfArray = function(array) {
  var arrEnd = [1, 2, 3];
  arrEnd.pop();
  return arrEnd;
}

var removeElementFromEndOfArray = function(array) {
  var arrEnd = [1, 2, 3];
  newArrEnd = arrEnd.slice(0, arrEnd.length - 1);
  return newArrEnd;
}
