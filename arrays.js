var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element){
  var x = [array];
  y = [element,... array]
	return y
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var x = [array];
  x = [element,... array]
  return x
}