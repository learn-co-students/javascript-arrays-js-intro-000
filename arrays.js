var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray([array], element) {
  var beginningArray = []
  ["elementN", ...beginningArray]
  return beginningArray;
}

function destructivelyAddElementToBeginningOfArray([array], element) {
  var newArray = [];
  newArray.unshift();
  return newArray;
}

function addElementToEndOfArray([array], element) {
  var endArray = [];
  [...endArray, "elemmentN"]
}

function destructivelyAddElementToEndOfArray([array], element) {
  var array = [];
  array.push();

}

function accessElementInArray([array], index) {
  var array = [];
  console.log(array[])
}

function destructivelyRemoveElementFromBeginningOfArray([array]) {
  const array = []
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray([array]) {
  var newArray = []
  newArray.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray([array]) {
  var newArray = []
  newArray.pop();
  return newArray;
}

function removeElementFromEndOfArray() {
  var newArray = []
  newArray.slice(0, newArray.length - 1)
  return newArray;

}
