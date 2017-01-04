var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

//Add elemt to start of array. NON DESTRUCTIVE
function addElementToBeginningOfArray(array, element) {
  var returnArray = [element, ...array];
  return returnArray;
}

//Add element t start of array. DESTRUCTIVE
function destructivelyAddElementToBeginningOfArray(array, element)  {
   array.unshift(element);
   return array;
}

//Add element to end of array. NON DESTRUCTIVE
function addElementToEndOfArray(array, element) {
  var returnArray = [...array, element];
  return returnArray;
}

//Add element to end of array. DESTRUCTIVE
function destructivelyAddElementToEndOfArray(array, element)  {
  array.push(element);
  return array;
}

//Get element of array at index
function accessElementInArray(array, index) {
  return array[index];
}

//Remove first element of array. DESTRUCTAVE.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

//Remove element from start of array. NON DESTRUCTIVE
//Slice can take two arguments. Start an end of slice.
//To return the last two elemnts we write .slice(-2)
//To return the last element we write .slice(-1)
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

//Remove element from end of array. Like 'push'. DESTRUCTIVE
function destructivelyRemoveElementFromEndOfArray(array)  {
  return array.pop();
}

//Remove element from end of array. NON DESTRUCTIVE
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
