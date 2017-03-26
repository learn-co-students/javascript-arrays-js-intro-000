var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

var element = "foo"
var array = 1

function addElementToBeginningOfArray(array,element)
{
  chocolateBars[array - 1] = element
}

function destructivelyAddElementToBeginningOfArray(element,array)
{
  chocolateBars[array - 1] = element
}

addElementToBeginningOfArray(1,"foo")
destructivelyAddElementToBeginningOfArray("foo",1)
