var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = ["one"]

function addElementToBeginningOfArray(element, array) {

var newArray =  [element,...array]

return(newArray)

}

function destructivelyAddElementToBeginningOfArray(element, array) {

  return [element,...array]

  return(array)
}

function addElementToBeginningOfArray(element, array) {

var newArray =  [element,...array]

return(newArray)

}

function destructivelyAddElementToEndOfArray(element, array) {

  return [...array, element]

  return(array)
}

function addElementToEndOfArray(element, array) {

var newArray =  [...array,element]

return(newArray)

}

var indexArray = ["fisrt", "second", "third"]

function accessElementInArray(index, array) {

return (array[index])

}

var shiftArray = ["Zero","One","Two"]

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()

  return(array)
}

var popArray = ["Zero","One","Two"]

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()

  return(array)
}


var sliceArray = ["Long", "Longer", "Longest"]

function removeElementFromEndOfArray(array){
  return (array.slice(0, array.length - 1))
}
