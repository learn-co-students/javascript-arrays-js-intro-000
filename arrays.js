


var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
var candyString = "foo";


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function removeElementFromEndOfArray(numbers){
  var numbers = [1,2];
  numbers.slice(0, numbers.length -1);
  return numbers;
}
var numbers = [ 1, 2, 3];
function destructivelyRemoveElementFromEndOfArray(numbers){
    numbers.pop();
    return numbers;
}
var numbers = [ 1, 2, 3];
function removeElementFromBeginningOfArray(numbers){
  numbers = numbers.slice(1);
  return numbers;
}
var numbers = [ 1, 2, 3];
function destructivelyRemoveElementFromBeginningOfArray(numbers){
  numbers.shift();
  return numbers;
}
var things = [ 1, 2, 3];
function accessElementInArray(things, index){
  return (things[2]);
}
var what = [1, 2];
function destructivelyAddElementToEndOfArray(what, foo){
  what.push('foo');
  return what;
}
var numbers = [1, 2, 3];
function destructivelyAddElementToBeginningOfArray(numbers, foo){
  numbers.unshift('foo');
  return numbers;
}
var array = [1, 2, 3];
function addElementToBeginningOfArray(array, foo){
  return ["foo", ...array];
}
var array = [1, 2, 3];
function addElementToEndOfArray(array, foo){
  return [...array, "foo"];
}
