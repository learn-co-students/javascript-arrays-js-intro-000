var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array,n){
  var array2 = [n,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array,n){
  array.unshift(n)
  return array
}

function addElementToEndOfArray(array,n){
  var array2 = [...array,n]
  return array2
}

function destructivelyAddElementToEndOfArray(array,n){
  array.push(n)
  return array
}

function accessElementInArray(array,i){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var array2 = array.slice(1)
  return array2
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var len = array.length
  var array2 = array.slice(0,len - 1)
  return array2
}
