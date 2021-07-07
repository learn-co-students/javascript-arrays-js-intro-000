var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, x) {
  const array = a;
  const array2 = [x, ...array];

  return array2
}

function destructivelyAddElementToBeginningOfArray(a, x) {
  var array = a;
  array.unshift(x);

  return array
}

function addElementToEndOfArray(a, x) {
  const array = a;
  const array2 = [...array, x];

  return array2
}

function destructivelyAddElementToEndOfArray(a, x) {
  var array = a;
  array.push(x);

  return array
}

function accessElementInArray(a, i) {
  return (a[i])
}

function removeElementFromBeginningOfArray(a) {
  var array = a;
  array.shift();

  return array
}

function removeElementFromEndOfArray(a) {
  var array = a;
  array.pop()

  return array
}
