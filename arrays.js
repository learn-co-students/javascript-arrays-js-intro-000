var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.push(element);
  return arr;
}
function addElementToBeginningOfArray(arr, element) {
  arr = [element, ...arr];
  return arr;
}