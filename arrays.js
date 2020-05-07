  
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
    return [elem,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
    arr.unshift(elem)
    return arr
}
function descructivelyAddElementToBeginningOfArray(array, element) {
	array.unshift(element);

	return array;
}

function addElementToEndOfArray(arr, elem) {
    return [...arr, elem]
}

function destructivelyAddElementToEndOfArray(arr, elem) {
    arr.push(elem)
    return arr
}

function accessElementInArray(arr, index) {
    return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift()
}

function removeElementFromBeginningOfArray(array) {
    return array.slice(1)
    
}
function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
	array.shift();

	return array;
}
function removeElementFromEndOfArray(arr) {
    return arr.slice(0, arr.length-1)
}
removeElementFromBeginningOfArray;