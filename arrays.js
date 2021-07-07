var array = [];

function addElementToBeginningOfArray(array, element){
  // use spread operator to add to beginning
  // return whole array
return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // unshift
  //return whole array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  // use spread operator to add to end
  // return whole array
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  // push
  //return whole array
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
return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop() //pop removes element from end of array
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
