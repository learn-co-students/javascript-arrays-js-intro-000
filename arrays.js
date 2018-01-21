var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
   var newArray = array.slice()
   newArray.unshift(element);
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = array.slice()
  newArray.push(element)
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
 var array = array[index];
 return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice()
    newArray.unshift(0);
    console.log(newArray);
    return array;
}
