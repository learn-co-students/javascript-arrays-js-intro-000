chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray (arr,newelement) {
  var newarray = [newelement, ...arr]
  return newarray
  }

function destructivelyAddElementToBeginningOfArray (arr,newelement){
  arr.unshift(newelement)
  return arr
}

function addElementToEndOfArray (arr, element){
  var newarray = [...arr , element]
  return newarray
}

function destructivelyAddElementToEndOfArray (arr,newelement){
 arr.push(newelement)
 return arr
}

function accessElementInArray (arr,n){
  return arr[n]
}

function destructivelyRemoveElementFromBeginningOfArray (arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr){
   arr.pop()
   return arr
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0 , arr.length - 1)
}
