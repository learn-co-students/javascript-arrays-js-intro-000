var chocolateBars=[snickers, hundred grand,kitkat,skittles];
var a=[1,2,3];
var b=4;
function addElementToBeginningOfArray(a,b)
{
  a=[b,...a];
  return a;
}

function destructivelyAddElementToBeginningOfArray(a,b)
{
  a=[b,...a];
  return a;
}

function addElementToEndOfArray(a,b)
{
  a.push(b);
  return b;
}

function destructivelyAddElementToEndOfArray(a,b)
{
  a=[1,2,3,4];
  return a;
}
