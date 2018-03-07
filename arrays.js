var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, element) {
    return [element, ...newArray]

}

function destructivelyAddElementToBeginningOfArray(newArray, element) {
    newArray.unshift(element)
    return newArray
}

function addElementToEndOfArray (newArray, element) {
    return [...newArray, element]

}

function destructivelyAddElementToEndOfArray(newArray, element) {
    newArray.push(element)
    return newArray
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (newArray) {
    newArray.shift()
    return newArray
}

function removeElementFromBeginningOfArray  (newArray) {
    return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray   (newArray) {
  newArray.pop()
  return newArray
}

function removeElementFromEndOfArray   (newArray) {
    return newArray.slice(0,newArray.length -1 )
}
