var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginnngOfArray(array, element){
  array = [element, . . .array]
return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  array = [...array, element]
return array
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  array.shift(array)
return array
}

function removeElementFromEndOfArray(array){
  array.pop(array)
return array
}
