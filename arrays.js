var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"];

function addElementToBeginningOfArray(){
var shinobi = ["Kakashi Hatake" , "Tsunade"];
shinobi.push("Minato Namikaze");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  }

  function addElementToEndOfArray(array, element) {
    return [array, ...element]
  }

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBegginingOfArray(array) {
  array.slice(0);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(2);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
array.pop();
return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
