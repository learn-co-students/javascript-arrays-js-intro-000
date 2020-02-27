var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  // array.unshift(element)
  return [element].concat(array)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  // array.unshift(element)
  return array.concat([element])
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, index){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, index){
  var newArray = array.concat([]);
  newArray.shift()
  return newArray
}

function removeElementFromEndOfArray(array, index){
  var newArray = array.concat([]);
  newArray.pop()
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array, index){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, index){
  array.pop()
  return array
}
