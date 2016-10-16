chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, y){
  const arrayNew = ['foo', ...array]
  return arrayNew;
}

function destructivelyAddElementToBeginningOfArray(array, y){
  array.unshift(y)
  return array
}

function addElementToEndOfArray(array, y){
  var newArray = [...array, y]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, y){
  array.push(y)
  return array
}

function accessElementInArray(array, y){
  return array[y]
}

function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
