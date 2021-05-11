var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,elementN)
{
return [elementN,...array]
}

function destructivelyAddElementToBeginningOfArray(array,elementN)
{ array.unshift(elementN)
  return array
}

function addElementToEndOfArray(array,elementN)
{
  return [...array,elementN]
}
function destructivelyAddElementToEndOfArray(array,elementN){
  array.push(elementN)
    return array
}

function accessElementInArray (array,index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array){
 array.shift()
 return array
}

function removeElementFromBeginningOfArray(array){

  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
return array.shift(-1)
}

function removeElementFromEndOfArray(array)
{
return array.slice(0,array.length-1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
array.pop()
return array
}
