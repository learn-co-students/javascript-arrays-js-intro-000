var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function destructivelyAddElementToBeginningOfArray(array1,element1){
    array1.unshift(element1)
return array1
}

function addElementToBeginningOfArray(array2,element2){
    array2 = [element2,...array2]
    return array2
}

function destructivelyAddElementToEndOfArray(array1,element1){
    array1.push(element1)
return array1
}

function addElementToEndOfArray(array2,element2){
    array2 = [...array2,element2]
    return array2
}
function accessElementInArray(array,index){
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(Array){
    Array.shift();
    return Array;
}

function removeElementFromBeginningOfArray(array){
    return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
    array.pop()
    return array
}

function removeElementFromEndOfArray(array){
    return array.slice(0,array.length-1);
}
