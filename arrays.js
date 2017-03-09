var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// listName.push("Thing to add") .push() adds item to end of list
// listName.unshift("Thing to add") .unshift() adds item to beginning of list

// ... spread operator used to create a new array in place ["thing1", ...newThing] would add newThing to end of "thing1" list

function addElementToBeginningOfArray(array, element) {
  return newArray = (element,...array);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndofArray(arr, ele) {
  return arr = (...arr,ele);
}

function descrutivelyAddElementToEndofArray(arr, ele) {
  return arr.pop(ele);
}

function descrutivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr = arr.slice(1);
}

function DescrutivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}
