var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el){
  return arr = [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr, el){
  return arr = [...arr, el];
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.push(el);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length - 1);
}
