var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,new_element){
  var new_array = [new_element,...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array,new_element){
  array.unshift(new_element)
  return array
}

function addElementToEndOfArray(array,new_element){
  var new_array = [...array,new_element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array,new_element){
  array.push(new_element)
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
  var new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var new_array = array.slice(0,array.length-1)
  return new_array
}
