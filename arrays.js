var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, addition) {
  return [addition, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, addition){
  array.unshift(addition)
  return array
}
function addElementToEndOfArray(array, addition){
  return [...array, addition]
}
function destructivelyAddElementToEndOfArray(array, addition){
  array.push(addition)
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
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
}
