var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var foo = "foo"
//array created
function addElementToBeginningOfArray(chocolateBars, foo){
  return[foo, ...chocolateBars];
}
//added "foo" to the beginning of the array and did not alter the original array
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}
//added foo to the beginning of the array, however, due to the unshift element, it changed the original array
function addElementToEndOfArray(chocolateBars,foo){
  return[...chocolateBars,foo];
}
//added "foo" to the end of the array and did not alter the original array
function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push(foo);
  return chocolateBars;
}
//added "foo" to the end of the array, and due to the "push" element, it altered the original array
function accessElementInArray(chocolateBars,index){
  return(chocolateBars[2]);
}
//accessed the second element of chocolate bars using index 2 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars,index){
  chocolateBars.shift();
  return chocolateBars;
}
//removed the 1st element from the array and mutated the array
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
//removed the first element without mutating the original element
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
//removed element from end of the array and mutated it using pop 
function removeElementFromEndOfArray(chocolateBars){
 chocolateBars=chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
}