var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array,element){

var array_1 =  new Object()
var array_1=[element, ...array]
  return array_1
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
return array
}

function addElementToEndOfArray(array,element){ //
var array_0 = new Array()
array_0 = [...array, element]

  return array_0
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[index]

}

function destructivelyRemoveElementFromBeginningOfArray(array){ //it mutates the underlying array.
array.shift()

  return array
}

function removeElementFromBeginningOfArray(array){ //it should not mutate the underlying array.
  var array_2 = array.slice(1) ///

return array_2
}

function destructivelyRemoveElementFromEndOfArray(array){ // it should mutate the array.
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){ // it should not mutate the original array.
  var array_3 = new Object()
  array_3 = array.slice(0,array.length-1)
  return array_3
}
