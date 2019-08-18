var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}


function destructivelyAddElementToBeginningOfArray(array, element){ //need fix
  var array = [element, ...array];
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){ //need fix
  var array = [...array, element];
  return array;
}

function accessElementInArray(array, index){ //need fix
  return array['index'];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  var array = array.slice()
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  var array = array.pop();
  return array;
}
