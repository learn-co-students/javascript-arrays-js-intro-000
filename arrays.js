var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, beginArray){
  var newArray = [beginArray, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, beginArray){
  array.unshift(beginArray)
  return array
}

function addElementToEndOfArray(array, endArray){
  var newArray = [...array, endArray]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, endArray){
  array.push(endArray)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
