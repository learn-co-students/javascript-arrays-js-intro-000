var chocolateBars =  ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (array, element) => [element, ...array]

var descructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return [...array]
}

var addElementToEndOfArray = (array, element) => [...array, element]

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return [...array]
}

var accessElementInArray = (array, index) => array[index]

var removeElementFromBeginningOfArray = (array) => array.slice(1)

var removeElementFromEndOfArray = (array) => array.slice(0, -1)
