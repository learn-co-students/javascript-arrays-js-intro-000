var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift(foo);
    return array;
}

function addElementToEndOfArray(array, element){
    var newArr = [...array, element];
    return newArr;
}

function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
}

function accessElementInArray(array, num){
    return array[num];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    return array.shift();
}

function removeElementFromBeginningOfArray(array){
    var newArr = array.slice(1);
    return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
    return arr.pop();
}

function removeElementFromEndOfArray(arr){
    return arr.slice(0, arr.length - 1)
}
