var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
    var newArr = array;
    newArr.unshift(element);
    return newArr;
}
addElementToBeginningOfArray([1], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray([1], 'foo');

function addElementToEndOfArray(array, element){
  var newArr = array;
  newArr.push(element);
  return newArr;
}
addElementToEndOfArray([1], 'foo');

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray([1], 'foo');

function accessElementInArray(array, index){
  return array[index];
}
accessElementInArray([1, 2, 3], 2);

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);

function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(1);
  return newArr;
}
removeElementFromBeginningOfArray([1, 2, 3]);

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
destructivelyRemoveElementFromEndOfArray([1, 2, 3]);

function removeElementFromEndOfArray(array){
  var newArr = array;
  newArr.pop();
  return newArr;
}
removeElementFromEndOfArray([1, 2, 3]);