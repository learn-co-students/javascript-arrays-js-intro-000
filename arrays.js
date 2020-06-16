var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
]

function addElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  var newChocolateBars = [newCandy, ...chocolateBars]

  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  chocolateBars.unshift(newCandy)

  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  var newChocolateBars = [...chocolateBars, newCandy]

  return newChocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, newCandy) {

  var newCandy = 'foo'

  chocolateBars.push(newCandy)

  return chocolateBars
}

function accessElementInArray(chocolateBars, placeHolder) {

  return chocolateBars[placeHolder]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {

  chocolateBars.shift()

  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {

  return chocolateBars.slice(1)

}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {

  chocolateBars.pop()

  return chocolateBars

}

function removeElementFromEndOfArray(chocolateBars) {

  return chocolateBars.slice(0,chocolateBars.length - 1)

}
