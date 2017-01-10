var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newarray = [element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newarray = [...array,element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

//**TODO**: Define a function in `arrays.js` called `removeElementFromBeginningOfArray`
//that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it **should not** mutate the underlying array.
function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

//**TODO**: Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that
//takes an array as its only argument and removes the last element. Your function should return the entire array, and it **should** mutate the array.
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

//**TODO**: Define a function in `arrays.js` called `removeElementFromEndOfArray` that
//takes an array as its only argument and removes the last element. Your function should return the entire array, and it **should not** mutate the array.
function removeElementFromEndOfArray(array){
  array.slice(0,array.length-1)
  return array
}
