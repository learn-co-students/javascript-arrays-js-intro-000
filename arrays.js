var chocolateBars = ["snickers", "hundred grand", "kitkat",]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift('foo');
  return array;
}

// let cookiesAndCream = ['cookies', 'cream'];
//
// cookiesAndCream.unshift('ketchup');
//
// let milliesShampoo = cookiesAndCream
//
// let dessert = [...cookiesAndCream, 'avocado']

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
