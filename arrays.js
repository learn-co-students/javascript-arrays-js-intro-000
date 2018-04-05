var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element)
{
    var arrClone = [element, ...arr];
    return arrClone;
}

function addElementToEndOfArray(arr, element)
{
  var arrClone = [...arr, element];
  return arrClone;
}

function destructivelyAddElementToEndOfArray(arr, element)
{
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index)
{
  var element = arr[index];
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr)
{
  var arrCopy = arr.slice(1);
  return arrCopy;
}

function removeElementFromEndOfArray(arr)
{
  var arrCopy = arr.slice(0, arr.length - 1);
  return arrCopy;
}

function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop();
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, element)
{
  arr.unshift(element);
  return arr;
}
