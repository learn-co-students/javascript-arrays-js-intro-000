var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {

  var a=new Array()
  for (i = 0; i < array.length; i++) {
    a.unshift(array[i])
  }
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

function accessElementInArray(array,index) {

  return array[index]
}

function removeElementFromBeginningOfArray(array) {

  array=array.slice(1)

  return array

}

function destructivelyRemoveElementFromBeginningOfArray(array) {

  array.shift()
  return array

}

function removeElementFromEndOfArray(array) {

  array=array.slice(0,array.length-1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {

  array.pop()
  return array

}
