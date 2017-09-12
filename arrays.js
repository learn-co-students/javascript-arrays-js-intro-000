var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inputArray, element) {
    var outputArray = [element, ...inputArray];
    return outputArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(inputArray, element) {
    var outputArray = [...inputArray, element];
    return outputArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(inputArray) {
    var outputArray = inputArray.slice(1);
    return outputArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(inputArray) {
    var outputArray = inputArray.slice(0, -1);
    return outputArray;
}
