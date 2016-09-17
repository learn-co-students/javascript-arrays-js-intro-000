var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var x = [1,2,3];
var y = [4,5,6];

function addElementToBeginningOfArray(x, n) {
  return [n, ...x]
}
addElementToBeginningOfArray(x, 0);

function destructivelyAddElementToBeginningOfArray(x, n) {
  x.unshift(n);
  return  x;
}
destructivelyAddElementToBeginningOfArray(x, 5);


function addElementToEndOfArray (y, m) {
    return [...y, m]
}
addElementToEndOfArray (y, 7);

function destructivelyAddElementToEndOfArray(y, m) {
  y.push(m);
  return y;
}
destructivelyAddElementToEndOfArray(y, 9);


function accessElementInArray(x, index) {
  return x[index];
}
accessElementInArray(x, 2);

function destructivelyRemoveElementFromBeginningOfArray(x) {
  x.slice(1);
  return  x;
}
destructivelyRemoveElementFromBeginningOfArray(x);

function removeElementFromBeginningOfArray(x){
    return x.slice(1);
}
removeElementFromBeginningOfArray(x);

function removeElementFromEndOfArray(x){
    return x.slice(0, x.length - 1);
}
removeElementFromEndOfArray(x);
