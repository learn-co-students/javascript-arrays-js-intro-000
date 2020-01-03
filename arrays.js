var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b){
  newArray = [b, ...a]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(ab, bc){
  ab.unshift(bc)
  return ab
}

function addElementToEndOfArray(array, element){
  array2 = [...array, element]
  return array2
}

function destructivelyAddElementToEndOfArray(ar, el){
  ar.push(el)
  return ar
}

function accessElementInArray(ar, index){
  return ar[index]
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  x.shift()
  return x
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
