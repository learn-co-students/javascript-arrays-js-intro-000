var chocolateBars = ["snicker" , "hundred grand","kitkat", "skittles"]


function addElementToBeginningOfArray(array,element)
{
const pektus = ["foo",... array];
return pektus;
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
array.unshift("foo")
  return array ;
}

function addElementToEndOfArray(array, element)
{
const pektus = [...array,"foo"];
return pektus;
}

function destructivelyAddElementToEndOfArray(array, element)
{
array.push("foo");
return array;
}
function accessElementInArray(array, index){

return array[2];
}


function removeElementFromBeginningOfArray(array)
{
array.shift()
return array
}

function removeElementFromEndOfArray(array){

  array.pop()
  return array
}
