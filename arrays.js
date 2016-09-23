var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
   arrays = [element, ...array]
     return arrays
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element)
      return array
}

function addElementToEndOfArray(array, element){
  difArrays = [...array, element]
    return difArrays
}

function destructivelyAddElementToEndOfArray(array, element){
      array.push(element);
        return array
}

function accessElementInArray(array, index){
    return array[index];

}

destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
    return array
}
