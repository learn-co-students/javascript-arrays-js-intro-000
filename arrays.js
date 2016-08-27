var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = chocolateBars

var element = "foo"

function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
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
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
