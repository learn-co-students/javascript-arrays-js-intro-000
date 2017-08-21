var chocolateBars = [
          "snickers",
          "hundred grand",
          "kitkat",
          "skittles"
];

function addElementToBeginningOfArray(arr,element) {
    var moreCities = arr.unshift(element);
    return moreCities;
}

function destructivelyAddElementToBeginningOfArray(arr,element) {
    return arr.unshift(element);
}

function addElementToEndOfArray(arr,element) {
  var moreCities = arr.push(element);
  return moreCities;
}

function destructivelyAddElementToEndOfArray(arr,element) {
  return arr.push(element);
}

function accessElementInArray(arr,index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  var sliced = arr.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  var sliced = arr.slice(-1);
  return arr;
}
