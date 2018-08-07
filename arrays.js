var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


const numbers = [1, 2, 3, 4];

function addElementToBeginningOfArray(x, y) {


  var x = [y, ...numbers]
  return x
}
addElementToBeginningOfArray(newNumArray, 8)

function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y)
  return x

}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dove')
