var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(x, y) {
  let newArr = [y, ...x];
  return newArr;
};

function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y);
  return x;
};

function addElementToEndOfArray(x, y) {
  let newArr = [...x, y];
  return newArr;
};

function destructivelyAddElementToEndOfArray(x, y) {
  x.push(y);
  return x;
};

function accessElementInArray(x, y) {
  return x[y];
};

function destructivelyRemoveElementFromBeginningOfArray(x, y) {
  x.shift();
  return x;
};

function removeElementFromBeginningOfArray(x) {
  return x.slice(1);
};

function destructivelyRemoveElementFromEndOfArray(x) {
  x.pop();
  return x;
};

function removeElementFromEndOfArray(x) {
  return x.slice(0, x.length-1);
};
