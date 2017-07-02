var chocolateBars=["snickers", "hundred grand","kitkat","skittles"];
var a=[1,2,3];
var b=4;
function addElementToBeginningOfArray(a,b)
{
  var c=[b,...a];
  return c;
}

function destructivelyAddElementToBeginningOfArray(a,b)
{
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b)
{
  var c=[a,...b];
  return c;
}

function destructivelyAddElementToEndOfArray(a,b)
{
  a.push(b)
  return a;
}
