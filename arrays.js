var chocolateBars = ['snickers', 'hundred grand','kitkat','kittles'];

var addElementToBeginningOfArray = (array, element) => {
return array1 = [element, ...array];
}

var destructivelyAddElementToBeginningOfArray = (array,element) => {
array.unshift(element);
return array
}

var addElementToEndOfArray = (array, element) => {
return array1 = [...array, element]
}

var destructivelyAddElementToEndOfArray = (array,element) => {
array.push(element);
return array
}

var accessElementInArray = (array,index) => {
return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = (array) =>{
array.shift();
return array;
}

var removeElementFromBeginningOfArray = (array) =>{
return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = (array) =>{
array.pop();
return array
}

var removeElementFromEndOfArray = (array) => {
return array.slice(0,array.length-1)
}
