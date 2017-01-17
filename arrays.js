var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(element, array) {
  var newArray = [`${element}`, ...`${array}`;
  return (newArray);
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.push (element)
  return (array);
}
