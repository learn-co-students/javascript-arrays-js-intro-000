var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (arr,add){
  var new = arr.unshift(add)
  return new
}

function destructivelyAddElementToBeginningOfArray (arr,add)
  return arr.unshift(add)
}

function addElementToEndOfArray(arr,add){
  var new = arr.push(add)
  return new
}

function destructivelyAddElementToEndOfArray (arr,add){
  return arr.push(add)
}

function accessElementInArray (arr,index){
  return arr[index]
}

