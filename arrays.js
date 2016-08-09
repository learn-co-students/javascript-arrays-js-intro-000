var chocolateBars = [`snickers`, `hundred grand`, `kitkat`,`skittles`];

function addElementToBeginningOfArray(arr, item){
  arr = [item, ...arr];
  return arr;
};

function descructivelyAddElementToBeginningOfArray(arr, item){
  arr.unshift(item);
  return arr;
};

function addElementToEndOfArray(arr, item){
  arr = [...arr, item];
  return arr;
};

function destructivelyAddElementToEndOfArray(arr, item){
  arr.push(item);
  return arr;
};

function accessElementInArray(arr, index){
  return arr[index];
};

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
};

function removeElementFromBeginningOfArray(arr){
  arr = arr.slice(1);
  return arr;
};

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
};

function removeElementFromEndOfArray(arr){
  arr.slice(0, arr.length - 1);
  return arr;
};
