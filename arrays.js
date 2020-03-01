var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (array, element) => {
return array = ['foo', ...array]
}

destructivelyAddElementToBeginningOfArray = (array, element) => {
array.unshift('foo')
return array
}

addElementToEndOfArray = (array, element) => {
  return array = [...array, 'foo']
}

destructivelyAddElementToEndOfArray = (array, element) => {
  array.push('foo')
  return array
}

accessElementInArray = (array, index) => {
  return array[2]
}

destructivelyRemoveElementFromBeginningOfArray = (array) => {
array.shift()
return array
}

removeElementFromBeginningOfArray = (array) => {
  return array.slice(1)
}

destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop()
  return array
}

removeElementFromEndOfArray = (array) => {
return array.slice(0, array.length -1)
}
