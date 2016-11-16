
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];
 // test result:  passed

function addElementToBeginningOfArray(array, element){
/*  1- functions take two parameters(array and an element)
    2- add the element to the beginning of the array and then returns the whole array.
    3- should return a new array and not modify the original. */
  var newarray= array
  newarray.unshift(element)
  return newarray;
}
// test passed

function destructivelyAddElementToBeginningOfArray(array, element){
   /* 1- functions take two parameters,(array and an element)
    2- add to the beginning of the array and returns the whole array
    3- modifying the original array passed in */
  return array.unshift(element);
}

//test failed


 /*
 error : arrays destructivelyAddElementToBeginningOfArray(array,element) adds an
 'element' to the beginning of an 'array':
 AssertionError: expected 2 to deeply equal ['foo' ,1]
 */
