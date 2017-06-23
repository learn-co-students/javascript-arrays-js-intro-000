var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(arr, el)
{
    var n = [el, ...arr]
    return n
}

function destructivelyAddElementToBeginningOfArray(arr, el)
{
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr, el)
{
  var n = [...arr, el]
  return n
}

function destructivelyAddElementToEndOfArray(arr, el)
{
  arr.push(el)
  return arr
}

function accessElementInArray(arr, i)
{
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr)
{
  var n = arr.slice(1)
  return n
}

function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr)
{
  var n = arr.slice(0, arr.length-1)
  return n
}
