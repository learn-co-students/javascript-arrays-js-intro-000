var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (orgArray, element) {
  var newArray = [element,...orgArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(orgArray, element) {
  orgArray.unshift(element)
  return orgArray
}

function addElementToEndOfArray(orgArray, element) {
  var newArray = [...orgArray,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(orgArray, element) {
  orgArray.push(element)
  return orgArray
}

function accessElementInArray(orgArray, index) {
  return orgArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray (orgArray){
  orgArray.shift()
  return orgArray
}

function removeElementFromBeginningOfArray (orgArray) {
  return orgArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (orgArray){
  orgArray.pop()
  return orgArray
}

function removeElementFromEndOfArray (orgArray) {
  return orgArray.slice(0,orgArray.length-1)
}
