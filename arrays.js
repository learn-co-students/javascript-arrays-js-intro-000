var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (myArray, item) {
  return [item, ...myArray]  
}

function destructivelyAddElementToBeginningOfArray (myArray, item) {
  myArray.unshift(item)
  return myArray
}

function addElementToEndOfArray (myArray, item) {
  return [...myArray,item]
}

function destructivelyAddElementToEndOfArray (myArray, item) {
  myArray.push(item)
  return myArray
}

function accessElementInArray (myArray, item) {
  return myArray[item]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray (myArray) {
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray (myArray) {
  return myArray.slice(0,myArray.length - 1)
}

