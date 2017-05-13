var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (array, element) => {
  array1 = [element, ...array]
  return array1
  //array[1] = element;
}

var destructivelyAddElementToBeginningOfArray = (array2, element) => {
  array2.unshift(element)
  return array2
}

var addElementToEndOfArray = (array3, element) => {
  array4 = [...array3, element]
  return array4
}

var destructivelyAddElementToEndOfArray = (array5, element) => {
  array5.push(element)
  return array5
}

var accessElementInArray = (array10, index) => {
  return array10[index];
}

var destructivelyRemoveElementFromBeginningOfArray = (array11) => {
  array11.shift()
  return array11;
}

var removeElementFromBeginningOfArray = (array12) => {
  array13 = array12.slice(1)
  return array13;
}

var destructivelyRemoveElementFromEndOfArray = (array14) => {
  array14.pop()
  return array14;
}

var removeElementFromEndOfArray = (array15) => {
  array16 = array15.slice(0, array15.length - 1)
  return array16;
}
