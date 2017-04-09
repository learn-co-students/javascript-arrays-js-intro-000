var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element){
  var x = [array];
  x = [element,... x]
  return x
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var x = [array];
  x = [element,... array]
  return x
}