var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray (array, element) {
  [...element, array];
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  element.unshift(array);
  return array
}

function addElementToEndOfArray (array, element) {
  [array, ...element];
  return array
}

function destructivelyAddElementToEndOfArray (array, element) {
  element.push(array);
  return array
}
