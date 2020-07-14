var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function destructivelyAddElementToBeginningOfArray(array,n) {
  array.unshift(n)
  return array
}

function addElementToBeginningOfArray(array, n) {
  var newArray = [n,...array]
  return newArray
}

function addElementToEndOfArray(array, n) {
  var newArray = [...array, n]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, n) {
  array.push(n)
  return array
}

function accessElementInArray(array, n){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1, array.length)
  return newArray
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0,array.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
