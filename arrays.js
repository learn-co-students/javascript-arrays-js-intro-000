var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (array, number) => {
  newArray = array.push(number);
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = (array, number) => {
  array = array.push(number);
  return array;
}

var accessElementInArray = (array, string) => {
  return array[string];
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  return array.shift();
}

var removeElementFromBeginningOfArray = (array) => {
  return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  return array.pop();
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length - 1)
}
