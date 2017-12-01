var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  ];

function addElementToBeginningOfArray(array, element) {
  var newArray = array.slice();
  newArray.unshift(element);
  return newArray;
}

addElementToBeginningOfArray([2, 3], 1);

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

destructivelyAddElementToBeginningOfArray([2, 3], 1);