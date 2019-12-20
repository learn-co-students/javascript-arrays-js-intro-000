var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element){
  array = [element,...array]
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  addElementToEndOfArray(array,element)
  const newArray=[element,...array]
  return newArray;
}

function addElementToEndOfArray(array,element){
  array = [...array,element]
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  var newArray = new Array();
  newArray=[...array,element]
  return newArray;
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(0)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray=array.slice(1,array.length-1)
  return newArray;
}
