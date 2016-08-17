/*: In `arrays.js`, define two functions, `addElementToBeginningOfArray`
and `destructivelyAddElementToBeginningOfArray`. Both functions take two parameters,
an array and an element to add to the beginning of the array, and both functions
should add the element to the beginning of the array and then return the whole array.
The destructive function, `destructivelyAddElementToBeginningOfArray`, should alter
the original array that's passed in; `addElementToBeginningOfArray`, on the other hand,
should return a new array **and not modify the original*/


function addElementToBeginningOfArray(arr, ele){
//use spread method to create new array while original stays unchanged
    var newArray = [ele, ...arr];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
//use unshift method on array to "destroy" original array by altering it... new array is not saved
    arr.unshift(ele);
    return arr
}

/*Define two more functions, `addElementToEndOfArray` and
`destructivelyAddElementToEndOfArray`. These functions also take two arguments,
an array and an element to add to the end of the array. `addElementToEndOfArray`
**should not** alter the original array; `destructivelyAddElementToEndOfArray`
**should** alter the original array.*/

function addElementToEndOfArray(arr, ele){
    var newArray = [...arr, ele]
    return newArray;
}

function destructivelyAddElementToEndOfArray(arr, ele){
//use push method to change original array
    arr.push(ele);
    return arr;
}

/*define a variable called `chocolateBars`. Its value should be an array of the
strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.*/

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


/*Define a function in `arrays.js` called `accessElementInArray`.
The function should accept an array and an index and return the element at that index.*/

function accessElementInArray(array, index){
    var x = array[index];
    return x;
}

/* Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray`
 that takes an array as its only argument and removes the first element. Your function should
 then return the entire array, and it **should** mutate the array.*/

function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

/*Define a function in `arrays.js` called `removeElementFromBeginningOfArray`
that takes an array as its only argument and removes the first element.
Your function should then return the entire array, and it **should not** mutate the underlying array.*/

function removeElementFromBeginningOfArray(arr){
     var newArray = arr.slice(1);
     return newArray;
}
/*Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes
an array as its only argument and removes the last element. Your function should
return the entire array, and it **should not** mutate the array.*/

function removeElementFromEndOfArray(arr){
    var newArray = arr.slice(0, arr.length -1);
    return newArray;
}

/*Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray`
that takes an array as its only argument and removes the last element. Your function
should return the entire array, and it **should** mutate the array.*/
function destructivelyRemoveElementFromEndOfArray(arr){
  //use pop method
    arr.pop();
    return arr;
}
