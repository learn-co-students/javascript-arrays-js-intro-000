let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

const addElementToBeginningOfArray = (arr, e) => {
  let copy = [...arr]
  copy[0] = e
  return copy
}

const destructivelyAddElementToBeginningOfArray = (arr, e) => {
  arr[0] = e
  return arr
}

const addElementToEndOfArray = (arr, e) => {
  let copy = [...arr]
  copy[-1] = e
  return copy
}

const destructivelyAddElementToEndOfArray = (arr, e) => {
  arr[-1] = e
  return arr
}

const accessElementInArray = (arr, i) => arr[i]

const destructivelyRemoveElementFromBeginningOfArray = (arr, e) => arr.shift(e)
