var chocolateBars=['snickers',
                    'hundred grand',
                    'kitkat',
                    'skittles'
                  ]

function addElementToBeginningOfArray(array, element){
  var test=[element,...array]
  return test
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element)
    return array
}

function addElementToEndOfArray(array,element){
  var test=[...array,element]
  return test
}

function destructivelyAddElementToEndOfArray(array,element){
    array.push(element)
    return array
}

function accessElementInArray(array, index){
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
}

function removeElementFromBeginningOfArray(array){
  var test=array.slice(1);
  return test
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
