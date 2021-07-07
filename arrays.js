var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr1, element0) {
  var arr1 = ['lions', 'tigers', 'bears'];
  var element0 = 'giraffes';
  arr1.unshift(element0);
  return arr1;
//function should take two parameters, an array and an element to add to the beginning of the array, and should add the element to the beginning of the array and then return the whole array
}

function destructivelyAddElemenetToBeginningOfArray (arr2, element00) {
  var arr2 = ['earth', 'wind', 'water'];
  var element00 = 'fire';
  arr2.unshift(element00);
  return arr2;

//function should take two parameters, an array and an element to add to the beginning of the array, and should add the element to the beginning of the array and then return the whole array. Should alter the original array that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array and not modify the original.
}