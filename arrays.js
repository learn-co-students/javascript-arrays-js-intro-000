var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// ADD TO BEGINNING
function addElementToBeginningOfArray(array, element) {
   return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
} 


// ADD TO END
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element);
 return array;
}


// INDEX IM HAVING ISSUES with

function accessElementInArray(array, index) {
  return (([], 3));
}

// expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)

// REMOVE FROM BEGINNING

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// REMOVE FROM END

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
