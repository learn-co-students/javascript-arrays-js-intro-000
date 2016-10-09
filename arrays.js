function chocolateBars(arr){
arr = ['snkikers', 'hundred grand', 'kitkat', 'skittles']

}

function addElementToBeginningOfArray (arr, element){
  arr.unshift(element);
  return arr;

}
function destructivelyAddElementToBeginningOfArray (arr, element){
  arr.unshift(element);
  return arr;

}

function addElementToEndOfArray (arr, element){
  arr.push(element);
  return arr;
}
function destructivelyAddElementToEndOfArray (arr, element){
  arr.push(element);
  return arr;

}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
