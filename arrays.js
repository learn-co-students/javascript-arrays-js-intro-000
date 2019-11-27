function addElementToBeginningOfArray(orgArray, newValue) {
  return [newValue, ...orgArray]
}

function destructivelyAddElementToBeginningOfArray(orgArray, newValue) {
  orgArray.unshift(newValue)
  return orgArray
}

function addElementToEndOfArray(orgArray, newValue) {
  return [...orgArray, newValue]
}

function destructivelyAddElementToEndOfArray(orgArray, newValue) {
  orgArray.push(newValue)
  return orgArray
}

function accessElementInArray(orgArray, index) {
  return orgArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(orgArray) {
  orgArray.shift()
  return orgArray
}

function removeElementFromBeginningOfArray(orgArray) {
  return orgArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(orgArray) {
  orgArray.pop()
  return orgArray
}

function removeElementFromEndOfArray(orgArray) {
  return orgArray.slice(0, orgArray.length - 1)
}

var chocolateBars = ["snickers", "hundred grand", "hundred grand", "skittles"]
