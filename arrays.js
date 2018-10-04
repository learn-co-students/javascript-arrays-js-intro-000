var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

addElementToEndOfArray = (array,element) => {
  return [...array, element]
}

destructivelyAddElementToEndOfArray = (array,element) => {
  array.push(element)
  return array
}

accessElementInArray = (array,index) => {
  return array[index]
}

destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift()
  return array
}

removeElementFromBeginningOfArray = (array) => {
  var newArray = array.slice(1)
  return newArray
}

destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop()
  return array
}

removeElementFromEndOfArray = (array) => {
  var newArray = array.slice(0, array.length-1)
  return newArray
}
