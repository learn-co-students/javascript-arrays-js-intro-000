  var chocolateBars =[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

var element = 1
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array
}

var element = 1
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  console.log([1, 2, 3], 2)
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0);
  return array;
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  console.log(1, 2, 3);
  array.pop(3);
  return array;
}

function removeElementFromEndOfArray(array){
  array.slice(2, array.length-1)
  return array;
}
