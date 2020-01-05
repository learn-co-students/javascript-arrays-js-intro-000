var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, chocolate) {
  const arr2 = [chocolate, ...array];
  return arr2
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate) {
  chocolateBars.unshift(chocolate)
  return chocolateBars
}

function addElementToEndOfArray(array, chocolate) {
  const arr2 = array.concat(chocolate)
  return arr2
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate) {
  chocolateBars.push(chocolate)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
