var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var a = ["how","are","you"]
var e = ["Hello"]
function addElementToBeginningOfArray(a,e){
return[e,...a]
}
addElementToBeginningOfArray(a,e)

function destructivelyAddElementToBeginningOfArray(a,e){
  a.unshift(e)
  return(a)
}
destructivelyAddElementToBeginningOfArray(a,e)

function addElementToEndOfArray(a,e){
 return  [...a,e]
}

function destructivelyAddElementToEndOfArray(a,e){
  a.push(e)
  return (a)
}
//*The function should accept an array and an index and return the element at that index.
ind = [2];
aa =["some","people","suck","yes"]
function accessElementInArray(aa,ind){
  return aa[ind]
}

function destructivelyRemoveElementFromBeginningOfArray (aa){
    aa.shift()
    return(aa)
}

function removeElementFromBeginningOfArray(aa){
  return aa.slice(1)
}

//*destructivelyRemoveElementFromEndOfArray that takes an array as its only argument and removes the last element.
// Your function should return the entire array, and it should mutate the array.

function destructivelyRemoveElementFromEndOfArray(aa){
  aa.pop()
  return aa
}

destructivelyRemoveElementFromEndOfArray(aa)

function removeElementFromEndOfArray(aa){
  return aa.slice(0, aa.length - 1)
}
removeElementFromEndOfArray(aa)
