var chocolateBars;
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var = addElementToBeginningOfArray();
function addElementToBeginningOfArray(choco, element) {
  var choco;
  choco = ["snickers", "hundred grand", "kitkat", "skittles"];
  var element;
  element = 'foo';
  [element, ...choco]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var peanuts = [1];
  return peanuts.unshift('foo');
}
