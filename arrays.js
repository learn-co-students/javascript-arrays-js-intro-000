var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.unshift(element)
  return newArr
}

function addElementToEndOfArray(array, element){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArr = array
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArr = array
  newArr.push(element)
  return newArr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.shift()
  return newArr
}

function removeElementFromEndOfArray(array){
  var newArr = []
  newArr = array.map(item => newArr.push(item))
  newArr.pop()
  return newArr
}
