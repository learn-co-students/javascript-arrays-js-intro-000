var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
 addElementToBeginningOfArray = (array, element) => {
 array = [element, ...array]
 return array
}
 destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return array
}
addElementToEndOfArray = (array, element) => {
  array = [...array, element]
  return array
}
destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}
accessElementInArray = (array, index) => {
  array = [...array]
  return array[index]
}
removeElementFromBeginningOfArray = (array) => {
  array.shift()
  return array
}
removeElementFromEndOfArray = (array) => {
  array = array.slice(0,array.length - 1)
  return array
}
