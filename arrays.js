var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array, add_element) {
    array.unshift(add_element);
    return array;
}

function destructivelyAddElementToBeginningOfArray(array, dadd_element) {
    array.unshift(dadd_element);
    return array;
}

function addElementToEndOfArray(array, element_add) {
    array.push(element_add)
    return array;
}

function destructivelyAddElementToEndOfArray(array, element_add) {
    array.push(element_add)
    return array;
}

function accessElementInArray(array, index) {
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
    var new_array = array.slice(0, array.length-1);
    return new_array;
}
