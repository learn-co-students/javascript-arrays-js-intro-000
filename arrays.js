var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, ele) {
  var newArray = [ele, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  var newArrayy= array;
  newArrayy.unshift(ele);
  return newArrayy;
}

function addElementToEndOfArray(array, ele) {
  var newArrayyy = [...array, ele];
  return newArrayyy;
}

function destructivelyAddElementToEndOfArray(array, ele) {
  var newArrayyyy = array;
  newArrayyyy.push(ele);
  return newArrayyyy;
}

function accessElementInArray(array, index) {
  var element = array[index];
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var newShortArray = array;
  newShortArray.shift();
  return newShortArray;
}

function removeElementFromBeginningOfArray(array) {
  var shortArray = array;
  shortArray = shortArray.slice(1);
  return shortArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var anotherArray = array;
  anotherArray.pop();
  return anotherArray;
}

function removeElementFromEndOfArray(array) {
  var yetAnotherArray = array.slice(0, array.length-1);
  return yetAnotherArray;
}
