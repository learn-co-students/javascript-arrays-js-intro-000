var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var list = array
  list = [element, ...array]
  return list
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var list = array
  list.unshift(element)
  return list
}

function addElementToEndOfArray(array, element){
  var list = array
  list = [...array, element]
  return list
}

function destructivelyAddElementToEndOfArray(array, element){
  var list = array
  list.push(element)
  return list
}

function accessElementInArray(array, index){
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var element = array
  element.shift()
  return element
}

function removeElementFromBeginningOfArray(array){
  var element = array
  element = element.slice(1)
  return element
}

function destructivelyRemoveElementFromEndOfArray(array){
  var element = array
  element.pop()
  return element
}

function removeElementFromEndOfArray(array){
  var element = array
  element = element.slice(0, element.length - 1)
  return element
}
