var chocolateBars = new Array();
chocolateBars.push("snickers");
chocolateBars.push("hundred grand");
chocolateBars.push("kitkat");
chocolateBars.push("skittles");

function addElementToBeginningOfArray(arr, value) {
  return([value, ...arr]);
}

function destructivelyAddElementToBeginningOfArray(arr, value) {
  arr.unshift(value);
  return(arr);
}

function addElementToEndOfArray(arr, value) {
  return([...arr, value]);
}

function destructivelyAddElementToEndOfArray(arr, value) {
 arr.push(value);
 return(arr);
}

function accessElementInArray(arr, index) {
  return(arr[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return(arr);
}

function removeElementFromBeginningOfArray(arr) {
  return(arr.slice(1));
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return(arr);
}

function removeElementFromEndOfArray(arr) {
  return(arr.slice(0, arr.length - 1));
}
