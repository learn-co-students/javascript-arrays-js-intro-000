var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars) {
  return (['foo', ...chocolateBars])
}
addElementToBeginningOfArray('foo')

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift('foo')
  return chocolateBars
}
destructivelyAddElementToBeginningOfArray('foo', chocolateBars)

function destructivelyAddElementToEndOfArray(chocolateBars) {
  chocolateBars.push('foo')
  return chocolateBars
}

destructivelyAddElementToEndOfArray(chocolateBars, 'foo')

function addElementToEndOfArray(chocolateBars) {
  return ([...chocolateBars, "foo"])
}

addElementToEndOfArray('foo')

function accessElementInArray(chocolateBars) {
  return (chocolateBars, 3)
}

accessElementInArray(chocolateBars)

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(chocolateBars) {
    chocolateBars = chocolateBars.slice(1)
    return chocolateBars
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
destructivelyRemoveElementFromEndOfArray(chocolateBars)

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}

removeElementFromEndOfArray(chocolateBars)
