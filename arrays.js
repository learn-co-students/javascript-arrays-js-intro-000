var chocolateBars = ["snickers", "hundred", "grand",
"kitkat", "skittles"]
// HINTS: take a look at your "test" for HINTS
function addElementToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element) //we mutate arrays of  array here.
  return array
}

function addElementToEndOfArray(array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
 array.push(element)
 return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array) // mutates the array because an array is what we are alterning.
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)//you have to put the number 1 indicating it removing the first array. with this
    // return without  mutate the underlying array.
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(array) //you have to put the number with it.
  return array //Mutate the array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1) //we are removeing the last element from the array
}                                       // which calls for the -1
