var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [1, 2, 3]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]  // spread operator "..." does not modify our original array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)  // "unshift" method alters original array
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]  // spread operator "..." does not modify our original array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)  // "push" method adds element and alters original array
  return array
}

function accessElementInArray(array, index){
  return array[index]  // returns array element according to index
}

function removeElementFromBeginningOfArray(array){
  array.shift()  // "shift" method removes first element from array
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()  // "pop" method removes last element from array
  return array
}
