var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(x, y) {
  var arr = [y]
  var x = chocolateBars
  var newChocolateBars = [y, ...x]
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(x, y) {
  var arr = [y]
  var x = chocolateBars
  return  y, ...x
}





function addElementToEndOfArray() {}
