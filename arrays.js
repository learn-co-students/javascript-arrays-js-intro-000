var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// const moreCats = ["Felix", ...cats]
var arr = [];

  function addElementToBeginningOfArray(arr, elem) {
    arr.unshift(elem);
    return arr;
  }

  function destructivelyAddElementToBeginningOfArray(arr, elem) {
    arr.unshift(elem);
    return arr;
  }

  function addElementToEndOfArray(arr, elem) {
    arr.push(elem);
    return arr;
  }

  function destructivelyAddElementToEndOfArray(arr, elem) {
    arr.push(elem);
    return arr;
  }

  function accessElementInArray(arr, index) {
    return arr[index];
  }

  function removeElementFromBeginningOfArray(arr) {
    arr.shift();
    return arr;
  }

  function removeElementFromEndOfArray(arr) {
    arr.pop()
    return arr;
  }
