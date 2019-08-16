var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray () {
  var addElementToBeginningOfArray = [1]
  addElementToBeginningOfArray.unshift('foo')
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray() {
  var addElementToEndOfArray = [1]
  addElementToEndOfArray.push('foo')
  return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  console.log(array[index])
  return array[index]

}

function removeElementFromEndOfArray(array) {
  newarray = array.slice()
  newarray.pop()
  return newarray

}

function removeElementFromBeginningOfArray(array) {
 return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
 return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
  return array

}
