var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {

  var a=new Array()
  a.unshift(array[0])
  a.unshift(element)
  return a

}

function destructivelyAddElementToBeginningOfArray(array,element) {

  array.unshift(element)
  return array

}

function addElementToEndOfArray(array,element) {

  var a=new Array()
  a.push(array[0])
  a.push(element)
  return a

}

function destructivelyAddElementToEndOfArray(array,element) {

  array.push(element)
  return array

}
