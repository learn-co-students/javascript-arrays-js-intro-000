

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function createArray() {
	return candy
}

var array = [1];
// 
function addElementToBeginningOfArray(array, element) {
  array = ["foo", ...array];
  return array;
  }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [...array, "foo"];
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push("foo");
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array.shift(1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo");
  return array;
}
// 	return xmasMovies;
// } We can use the spread operator to create a new array in place, rather than modifying the original one. Let's try it!
// function destructivelyAddElementToBeginningOfArray(  )
// var accessArray = [22, 34, 56, 72];
// 
// function accessElementFromArray(accessArray) {
// 	return accessArray[2];
// }
// 
// var replaceArray = ["Bush", "Trump", "Obama"];
// function replaceElementInArray(replaceArray) {
// 	replaceArray [1] = "Carter";
// }
// 
// var dishes = ["plate", "cup", "stein", "bowl"];
// 
// function removeElementFromArray(dishes) {
// 	var removedDishes = dishes.splice(2, 2, "Roast Chicken")
// }
// var numberArray = [1, 2, 3, 4, 5, 6];
// numberArray.forEach (function iterateArray(numberArray, index) {
//   var newNums = index + 1;
//   return newNums;
// }