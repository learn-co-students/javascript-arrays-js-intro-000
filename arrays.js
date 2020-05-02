
// TODO: In arrays.js, define a variable called chocolateBars. Its value should be
// an array of the strings snickers, hundred grand, kitkat, and skittles.

 var chocolateBars = [
   'snickers',
   'hundred grand',
   'kitkat',
   'skittles'
 ];


 // TODO: In arrays.js, define two functions, addElementToBeginningOfArray and
 // destructivelyAddElementToBeginningOfArray. Both functions take two parameters,
 // an array and an element to add to the beginning of the array, and both
 // functions should add the element to the beginning of the array and then return
 // the whole array. The destructive function,
 // destructivelyAddElementToBeginningOfArray, should alter the original array
 // that's passed in; addElementToBeginningOfArray, on the other hand, should
 // return a new array and not modify the original.

 // function addElementToBeginningOfArray(array, element) {
 //    var arr = [element, ...array];
 //    return(arr);
 //  }
 function addElementToBeginningOfArray(array, element) {
    return([element, ...array]);
  }

  // function destructivelyAddElementToBeginningOfArray(array, element) {
  //    var arr = array.unshift(element);
  //    return(arr);
  //  }

  function destructivelyAddElementToBeginningOfArray(array, element) {
    //  return(array.unshift(element)); //Deeply
    var arr = array
    arr.unshift(element);
    return(arr);
   }

 //
 // TODO: Define two more functions, addElementToEndOfArray and
 // destructivelyAddElementToEndOfArray. These functions also take two arguments,
 // an array and an element to add to the end of the array. addElementToEndOfArray
 // should not alter the original array; destructivelyAddElementToEndOfArray
 // should alter the original array.

 // function addElementToEndOfArray(array, element) {
 //    var arr = [...array, element];
 //    return(arr);
 //  }

 function addElementToEndOfArray(array, element) {
    return([...array, element]);
  }

  function destructivelyAddElementToEndOfArray(array, element) {
    // return(array.push(element)); //Deeply
     var arr = array
     arr.push(element);
     return(arr);
   }

 // TODO: Define a function in arrays.js called accessElementInArray. The function
 // should accept an array and an index and return the element at that index.

 function accessElementInArray(array, index) {
   return(array[index]);
 }

// TODO: Define a function in arrays.js called
// destructivelyRemoveElementFromBeginningOfArray that takes an array as its only
// argument and removes the first element. Your function should then return the
// entire array, and it should mutate the array.

function destructivelyRemoveElementFromBeginningOfArray(array) {
  // return(array.shift()); //Deeply
  var arr = array
  arr.shift();
  return(arr);
}

// TODO: Define a function in arrays.js called removeElementFromBeginningOfArray.
// It takes an array as its only argument. The function should remove the first
// element in the array. This function should return the entire array in the same
// line, and it should not mutate the original array.

function removeElementFromBeginningOfArray(array) {
  return(array.slice(1));
}

// TODO: Define a function in arrays.js called
// destructivelyRemoveElementFromEndOfArray that takes an array as its only
// argument and removes the last element. Your function should return the entire
// array, and it should mutate the array.

function destructivelyRemoveElementFromEndOfArray(array) {
  // return(array.pop()); //Deeply
  var arr = array
  arr.pop();
  return(arr);
}

// TODO: Define a function in arrays.js called removeElementFromEndOfArray that
// takes an array as its only argument and removes the last element. Your function
// should return the array without the last element, and it should not mutate the
// original array.

function removeElementFromEndOfArray(array) {
  return(array.slice(0, length - 1));
}
