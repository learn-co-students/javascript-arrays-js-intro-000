var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  var NewArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
}

function addElementToEndOfArray(array,element){
  array.push(element)
};

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
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
