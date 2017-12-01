var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
  let copy = array
  //console.log("what is copy:", copy)
  copy.unshift(element);
  //console.log("WHAT IS COPY:", copy)
  return copy
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   //console.log("WHAT IS ARRAY:", array)
   return array;
}


function addElementToEndOfArray(array, element) {
  let arrayCopy = array;
  arrayCopy.push(element);
  return arrayCopy
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   return array
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}


function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
