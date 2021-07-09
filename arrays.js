var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var y = "candy"

var index = 3

function addElementToBeginningOfArray(chocolateBars, y)
{
  const moreBars = [y,...chocolateBars]
  return moreBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, y)
{
    chocolateBars.unshift(y)
    return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, y)
{
  const moreBars = [...chocolateBars, y]
  return moreBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, y)
{
  chocolateBars.push(y)
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index)
{
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
{
  chocolateBars.shift()
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars)
{
  return bars = chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars)
{
  return chocolateBars.slice(0, chocolateBars.length -1);
}

