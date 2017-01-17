var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  var myArray = array
  myArray.unshift(element)
  return myArray
}
/*[array, ...element] ... notation adds element to array without changing the underlying array */

function destructivelyAddElementToBeginningOfArray(array, element){
  var myArray = array
  myArray.unshift(element)
  return myArray

}

function addElementToEndOfArray(array, element){
  var myArray = array
  myArray.push(element)
  return myArray
}

function destructivelyAddElementToEndOfArray(array, element){
  var myArray = array
  myArray.push(element)
  return myArray
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
