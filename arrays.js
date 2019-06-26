var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  let temp = [element, ...array];
  return(temp);
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element) {
  let temp = [...array, element]
  return(temp);
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return(array);
}

function accessElementInArray (array, index) {
  return(array[index])
}

function removeElementFromBeginningOfArray (array) {
  let temp = array.slice(1);
  return(temp);
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return(array);
}

function removeElementFromEndOfArray (array) {
  let temp = array.slice(0, array.length - 1);
  return(temp);
  // return(array.slice(-1));
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return(array);
}
