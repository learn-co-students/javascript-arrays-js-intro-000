var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(chocolateBars, element) {
  var array = [element, ...chocolateBars]

  return array
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)

  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element){
  var array = [...chocolateBars, element]

  return array
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element)

  return chocolateBars
}

var array = new Array();

function accessElementInArray(array, index) {
  return array [index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array
  newArray = newArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray = array
  newArray = newArray.slice(0,newArray.length - 1)
  return newArray
}
