var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (a, b) {
  var c = [b, ...a];
  return c;
}

function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray (a, b) {
  var c = [...a, b];
  return c;
}

function destructivelyAddElementToEndOfArray(a, b){
  a.push(b);
  return a;
}

function accessElementInArray(a, b) {
  return a[b];
}

function destructivelyRemoveElementFromBeginningOfArray (a) {
  return a.shift();
}

function removeElementFromBeginningOfArray (a) {

  return a.slice(1);;
}

function destructivelyRemoveElementFromEndOfArray (a) {
  return a.pop();
}

function removeElementFromEndOfArray (a) {
  return a.slice(0,a.length-1);
}
