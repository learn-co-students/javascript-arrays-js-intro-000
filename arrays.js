var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(array, element){
var newArray = [element, ...array]
return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
return array
}
function addElementToEndOfArray(array, element){
  var endArray =[...array, element]
  return endArray
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array
}
function accessElementInArray(array, index) {
return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
return array
}
function removeElementFromBeginningOfArray(array){
var newSitxh = array.slice(1)
return newSitxh
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function removeElementFromEndOfArray(array){
  var endtimes = array.slice(0, array.length -1)
  return endtimes
}
