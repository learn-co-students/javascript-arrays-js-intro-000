var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e) {
  var newArray = [e, ...a];
  return (newArray);
}

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e);
  return (a);
}

function addElementToEndOfArray(a, e) {
  var newArray = [...a, e];
  return (newArray);
}

function destructivelyAddElementToEndOfArray(a, e) {
  a.push(e);
  return (a);
}

function accessElementInArray(a, i) {
  return (a[i]);
}

funtion destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return (a);
}

function removeElementFromBeginningOfArray(a) {
  var newArray = a.slice(1);
  return (newArray);
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return (a);
}

function removeElementFromEndOfArray(a) {
  var newArray = a.slice(0, a.length - 1);
  return (newArray);
}
