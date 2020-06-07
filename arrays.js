var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  newArr = [ele, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(thisArray, thisElement) {
  thisArray.unshift(thisElement);
  return thisArray;
}

function addElementToEndOfArray(addArr, addEle) {
  anotherArr = [...addArr, addEle];
  return anotherArr;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
  newArr = array.slice(0, array.length - 1);
  return newArr;
}
