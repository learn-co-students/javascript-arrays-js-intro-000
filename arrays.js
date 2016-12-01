var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"]

function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array= array.unshift(element);
    return array
}

function addElementToEndOfArray(array, element) {
    return [ ...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
    array = array.push(element);
    return array
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift();
}

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
    return array.pop();
}

function removeElementFromEndOfArray(array) {
    return array.slice(array.length)
}
