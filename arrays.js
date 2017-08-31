var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
arrray= [element, ...array];
  return(arrray)
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return(array)
  }

function addElementToEndOfArray (array,element){
  aray= [...array, element];
  return(aray)
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return(array)
}

function accessElementInArray(array, index){
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(1);
  return(array)
}

function removeElementFromBeginningOfArray(array) {
    arr= array.slice(1);
  return (arr)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.splice(array.length -1);
  return(array)
}

function removeElementFromEndOfArray(array) {
  arr= array.splice(array.length -1);
  return(array)
}
