var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element){
  chocolateBars = [element, ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element){
  chocolateBars=[...chocolateBars, element]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray(array){
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  array = array.slice(0,array.length-1)
  return array
}