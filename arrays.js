var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array) {
  var array = [1]
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array) {
  var array = [1]
  array.unshift("foo")
  return array
}
