var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  array.push(element)
  return array
};

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
};

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
};
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop()
  return array
};

function removeElementFromEndOfArray(array,element){

};
