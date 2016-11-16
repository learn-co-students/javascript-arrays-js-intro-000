var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
 ]

var myArray = [1]
var otherParameter = 'foo'

function addElementToBeginningOfArray(){
   return [otherParameter, ...myArray]
 }

function destructivelyAddElementToBeginningOfArray(myArray, otherParameter){
   myArray.unshift(otherParameter)
   return myArray
}

function addElementToEndOfArray(){
   return [...myArray, otherParameter]
}

function destructivelyAddElementToEndOfArray(myArray, otherParameter){
   myArray.push(otherParameter)
   return myArray
}

var myArray2 = [3,2,3]
function accessElementInArray(){
  return(myArray2[0])
}

var myArray3 = [3,2,3]
function destructivelyRemoveElementFromBeginningOfArray(){
  myArray3.shift()
}

var myArray4 = [2, 3]
function removeElementFromBeginningOfArray(){
  myArray4.slice(1)
  return myArray4
}

var myArray5 = [1, 2, 3]
function destructivelyRemoveElementFromEndOfArray(){
  myArray5.pop()
  return myArray5
}

var myArray6 = [1, 2]
function removeElementFromEndOfArray(){
  myArray6.slice(-1)
  return myArray6
}
