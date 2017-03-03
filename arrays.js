var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var newarr = [...array, element];
  return newarr;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array4,index){
  return array4[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array5){
  return array5.shift();
}

function removeElementFromBeginningOfArray(array6){
  var newarr = array6.slice(1);
  return newarr;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newarr = array.slice(0,-1);
  return newarr;
}
