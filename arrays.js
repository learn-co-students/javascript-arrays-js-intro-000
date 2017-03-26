var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];



function addElementToBeginningOfArray(array,element)
{
  chocolateBars[array - 1] = element
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  chocolateBars[array - 1] = element
}

addElementToBeginningOfArray(1,"foo")
destructivelyAddElementToBeginningOfArray(1,"foo")
