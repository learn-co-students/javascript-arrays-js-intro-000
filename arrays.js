var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element)
{
  var array1 = [element, ...array];
  return array1;
  
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return(array);
}
function addElementToEndOfArray(a, element)
{
  var array1 = [...a, element];
  return(array1);
}
function destructivelyAddElementToEndOfArray(a, element)
{
  a.push(element);
  return(a);
}
function accessElementInArray(a, index)
{
  return(a[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array)
{
  var a = array.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array)
{
  var a = array.slice(0, array.length -1);
  return a;


}




