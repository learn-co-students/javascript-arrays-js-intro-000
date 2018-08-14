var chocolateBars =["snickers","hundred grand", "kitkat" , "skittles"];

funtion addElementToBeginningOfArray(array,element)
{
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element)
}

function addElementToEndOfArray(array,element)
{
  return[...array,element]
}

function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element)
  return array
}

function accessElementInArray(array,index)
{
  return array[index]
}

function destructivelyAddElementToBeginningOfArray(array)
{
  return array.shift()
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}

function destructivelyAddElementToEndOfArray(array)
{
  array.pop()
  return array
}

function removeElementFromEndOfArray(array)
{
  return array.slice(0,array.length-1)
}
