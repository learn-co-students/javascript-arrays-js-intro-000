var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var arrayz = [];

function addElementToBeginningOfArray(arrayz, element) {
  //var arrajka = [];
  arrayz.unshift(element);
  return arrayz;
}

function destructivelyAddElementToBeginningOfArray(arrayz, element) {
  ["element", ...arrayx];
  return arrayz, arrayx;
}

function addElementToEndOfArray(arrayz, element) {
  var arrayx = [];
  arrayx.push(element);
  return arrayx;
}

function destructivelyAddElementToEndOfArray(arrayz, element) {
  arrayz.push(element);
  return arrayz;
}

function accessElementInArray(arrayz, index) {
}

function destructivelyRemoveElementFromBeginningOfArray(arrayz) {
  arrayz.shift();
  return arrayz;
}

function removeElementFromBeginningOfArray(arrayz) {
  arrayz.slice(1);
  return arrayz;
}

function destructivelyRemoveElementFromEndOfArray(arrayz) {
  arrayz.pop();
  return arrayz;
}

function removeElementFromeEndOfArray(arrayz) {
  var temp = length.arrayz;
  arrayz.slice(temp - 1);
  return arrayz;
}
