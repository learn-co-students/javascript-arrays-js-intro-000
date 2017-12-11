var chocolateBars = ["sickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArr, newElem) {
    return [newElem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, newElem) {
    myArr.unshift(newElem);
    return myArr
}

function addElementToEndOfArray(myArr, newElem) {
    return [...myArr, newElem]
}

function destructivelyAddElementToEndOfArray(myArr, newElem) {
    myArr.push(newElem);
    return myArr
}

function accessElementInArray(myArr, index) {
    return myArr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArr) {
    myArr.shift();
    return myArr
}

function removeElementFromBeginningOfArray(myArr) {
    return myArr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArr) {
    myArr.pop();
    return myArr
}

var removeElementFromEndOfArray = myArr => {
    return myArr.slice(0, myArr.length - 1)
}
