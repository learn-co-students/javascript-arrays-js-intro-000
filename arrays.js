chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  newArray =  [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift
  return array
}
function removeElementFromBeginningOfArray(array){
  arrayToReturn = array.slice(1)
  return arrayToReturn
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}
