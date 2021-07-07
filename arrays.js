var chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"]

/**
* addElementToBeginningOfArray function add the element passed as parameter to the beginning of the array.
* It sould return a new array and not modify the original
**/
function addElementToBeginningOfArray(argArray, argElement) {
    var newArray = [argElement, ...argArray];

    return newArray;
}

/**
* destructivelyAddElementToBeginningOfArray function add the element passed as parameter to the beginning of the array.
* It should alter the original array that's passed in and return the whole array.
**/
function destructivelyAddElementToBeginningOfArray(argArray, argElement) {
    argArray.unshift(argElement);

    return argArray;
}


/**
* addElementToEndOfArray should not alter the original array
**/
function addElementToEndOfArray(argArray, argElement) {
    var newArray = [...argArray, argElement];

    return newArray;
}

/**
* destructivelyAddElementToEndOfArray should alter the original array
**/
function destructivelyAddElementToEndOfArray(argArray, argElement) {
    argArray.push(argElement);

    return argArray;
}

function accessElementInArray(argArray, argIndex) {
    return argArray[argIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(argArray) {
    argArray.shift();

    return argArray;
}

function removeElementFromBeginningOfArray(argArray) {
    var newArray = argArray.slice(1);

    return newArray;
}


function destructivelyRemoveElementFromEndOfArray(argArray) {
    argArray.pop();

    return argArray;
}

function removeElementFromEndOfArray(argArray) {
    var newArray = argArray.slice(0, argArray.length - 1);

    return newArray;
}
