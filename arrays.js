chocolateBars = [
"snickers",
"hundred grand",
"kitkat",
"skittles"
];

var addElementToBeginningOfArray = function (array, element) {
return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = function (array, element) {
  array.unshift(element);
  return array
}

addElementToEndOfArray = function (array, element) {
  return [...array, element]
}

destructivelyAddElementToEndOfArray = function (array, element) {
  array.push(element);
  return array
}

accessElementInArray = function (array, index) {
  return array[index]
}

removeElementFromBeginningOfArray = function (array) {
  array.shift();
  return array
}

removeElementFromEndOfArray = function (array) {
  array.pop()
  return array;
}
