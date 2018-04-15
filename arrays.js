var chocolateBars = [`snickers`,`hundred grand`,`kitkat`,`skittles`]

function addElementToBeginningOfArray(array,frontElement){
  return [frontElement,...array]

}
function destructivelyAddElementToBeginningOfArray(array,frontElement){
  array.unshift(frontElement)
  return array
}
function addElementToEndOfArray(array,frontElement){
  return [...array,frontElement]
}
function destructivelyAddElementToEndOfArray(array,frontElement){
  array.push(frontElement)
  return array
}
function accessElementInArray(array,index){
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
  return array.slice(0,array.length - 1)
}
