var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

// var addElementToBeginningOfArray
// addElementToBeginningOfArray.unshift(element)

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
return array
}

function addElementToEndOfArray(array, element){
var newArray2 = [...array, element]
return newArray2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  let slicedArray = array.slice(1)
  return slicedArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  let endSlice = array.slice(0, array.length -1)
  return endSlice
}
