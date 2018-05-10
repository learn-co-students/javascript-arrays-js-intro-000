// array variable
var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array,item){
  var nArray=array.slice(0)
  nArray.unshift(item)
  return nArray
}

function destructivelyAddElementToBeginningOfArray(array,item){
  array.unshift(item)
  return array
}

function addElementToEndOfArray(array,item){
  var nArray=array.slice(0)
  nArray.push(item)
  return nArray
}

function destructivelyAddElementToEndOfArray(array,item){
  array.push(item)
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
  var nArray=array.slice(0)
  nArray.shift()
  return nArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
   var nArray = array.slice(0);
   nArray.pop()
   return nArray
 }
