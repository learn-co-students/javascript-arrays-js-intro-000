var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, chocolate) {
  return [chocolate, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate) {
  chocolateBars.unshift(chocolate)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, chocolate) {
  return [...chocolateBars, chocolate]
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate) {
  chocolateBars.push(chocolate)
  return chocolateBars
}

function accessElementInArray(chocolateBars, chocolate) {
  return chocolateBars[chocolate]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
