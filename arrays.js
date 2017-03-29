//hi hello

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(ary1,elm){
  var newAry1 = [elm, ...ary1]
  return newAry1
}
function destructivelyAddElementToBeginningOfArray(ary1,elm){
  ary1.unshift(elm)
  return ary1
}
function addElementToEndOfArray(ary1,elm){
  var newAry1 = [...ary1, elm]
  return newAry1
}
function destructivelyAddElementToEndOfArray(ary1,elm){
  ary1.push(elm)
  return ary1
}
function accessElementInArray(ary1,elm){
  return ary1[elm]
}
function destructivelyRemoveElementFromBeginningOfArray(ary1){
  ary1.shift()
  return ary1
}
function removeElementFromBeginningOfArray(ary1){
  return ary1.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(ary1){
  ary1.pop()
  return ary1
}
function removeElementFromEndOfArray(ary1){
  var newAry1 = ary1.slice(0, ary1.length - 1)
  return newAry1
}
