var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element)
{
  var c=[element,...array];
  return c;

}
function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return array;
}
function accessElementInArray(a,b)
{
  return a[b];
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}
function removeElementFromBeginningOfArray(a){
  a=a.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(a)
{
  a.pop();
  return a;
}
function removeElementFromEndOfArray(a){
var c
  c=a.slice(0, a.length-1);
  return c;

}
function addElementToEndOfArray(a,b)
{
  var c=[...a,b];
  return c;
}
function destructivelyAddElementToEndOfArray(a,b)
{
  a.push(b);
  return a;
}
