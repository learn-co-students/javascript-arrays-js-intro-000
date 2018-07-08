var chocolateBars=['snickers', 'hundredgrand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var array=[1]
  return ['foo',...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element){
  var array=[1]
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo")
  return array
}

function accessElementInArray(array, index){
  var array=[1,2,3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var array=[1,2,3]
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
    var array=[1,2,3]
    return array.slice(0, array.length-1)
}
