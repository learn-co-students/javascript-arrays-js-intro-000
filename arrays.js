var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var arrayTwo = [element,...array];
  return arrayTwo;
}

// function destructivelyAddElementToBeginningOfArray(array, element) {
//   array = array.unshift(element);
//   return array;
// }
