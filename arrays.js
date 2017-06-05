var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, a){
  var newArr = [a, array[0]]
  return newArr
  }

function destructivelyAddElementToBeginningOfArray(array,b){
  array.unshift(b)
  return array
  }

function addElementToEndOfArray(array,c){
  return [...array, c]
  }

function destructivelyAddElementToEndOfArray(array, d){
  array.push(d)
  return array
}

function accessElementInArray(array,e){
  return array[e]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
