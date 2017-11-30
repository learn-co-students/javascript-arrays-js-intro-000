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
addElementToBeginningOfArray([2,3], 1);

  function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array.unshift();                  
  return newArray;
}
addElementToBeginningOfArray([2,3], 1);

  function addElementToEndOfArray(array, element) {
  var newArray = array.slice();
  newArray.unshift(element);
  return newArray;
}
addElementToBeginningOfArray(1, [2,3]); 