function addElementToBeginningOfArray(arr, x){
  new_arr = arr.unshift(x);
  return new_arr;
}

function destructivelyAddElementToBeginningOfArray(arr, a){
  return arr.unshift(a)
}

function addElementToEndOfArray(arr, y){
  new_arr = arr.push(y);
  return new_arr;
}

function destructivelyAddElementToEndOfArray(arr, b) {
  return arr.push(b);
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(1, arr.length-1);
}

function functionName() {

}
