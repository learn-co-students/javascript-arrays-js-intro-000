var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

//Add element to the front of an arr by creating a new array.
//Elements from array obtained using spread operator.
function addElementToBeginningOfArray(arr, args){
   return [args, ...arr]
}

//Unshift mutates the array: inserts value at the beginning of an array.
//Shift removes an element from the beginning of an array.
function destructivelyAddElementToBeginningOfArray(arr,args){
    arr.unshift(args)
    return arr
}

//Push simply add elements to the end of the array.
function addElementToEndOfArray(arr, args){
   arr.push(args)
   return arr
}

//
function destructivelyAddElementToEndOfArray(arr,args){
  arr.push(args)
  return arr
}

function accessElementInArray(arr,index){
    return arr[index]
}

//Unshift removes the first value in the array.
function destructivelyRemoveElementFromBeginningofArray(arr){
    arr.unshift()
    return arr
}

function removeElementFromBeginningOfArray(arr){
    arr.shift()
    return arr
}


function removeElementFromEndOfArray(arr){
    return  arr.slice(0,arr.length -1)
}
