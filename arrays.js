var chocolateBars=["snickers", "hundred grand","kitkat","skittles"];
var a=[1,2,3];
var b=4;
var ind=[10,20,30,40];
var i=2;
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
  var c=[...a,b];
  return c;
}

function destructivelyAddElementToEndOfArray(a,b)
{
  a.push(b)
  return a;
}

function accessElementInArray(ind,i)
{
  return ind[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a)
{
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a)
{
  var c=a.slice(1);
  return c;
}


function destructivelyRemoveElementFromEndOfArray(a)
{
  a.pop();
  return a;
}


function removeElementFromEndOfArray(a)
{
  var c=a.slice(0,a.length-1);
  return c;
}
