var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
    arrays = [element, ...array]

    return arrays
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
   return array
}


function addElementToEndOfArray(array, element){
    arrays = [...array, element]
    return arrays

}

function destructivelyAddElementToEndOfArray(array, element){
      array.push(element)
      return array
}

function accessElementInArray(array, index){
      return array [index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
      array.shift()
      return array
}

function removeElementFromBeginningOfArray(array){
      arrays = array.slice(1)
      return arrays
}

function destructivelyRemoveElementFromEndOfArray(array){
      array.pop(1)
      return array
}

function removeElementFromEndOfArray(array){
      arrays= array.slice(0, array.length - 1)
      return arrays
}
