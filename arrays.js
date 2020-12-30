var chocolateBars = function() {
    return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToBeginningOfArray(array, element) {
        array = [element, ...array]
    return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array
}

function addElementToEndOfArray(array, element) {
    array = [...array, element]
    return array
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
}

function accessElementInArray(array, index) {
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
}

function removeElementFromBeginningOfArray(array) {
    array = array.slice(1)
    return array
    // As with other non-destructive methods, we need to assign the results to a new variable to save our changes: destructive are the spreader operation
    // so the non-destructive methods (push, filter, unshift, etc.) would leave the original array but create a new modified copy, destructive would alter the original array
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
    return array

}

function removeElementFromEndOfArray(array) {
    array = array.slice(0, array.length -1)
    return array
}