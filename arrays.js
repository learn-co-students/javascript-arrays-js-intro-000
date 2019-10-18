var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){ 
   return([element, ...array]);
}

function addElementToEndOfArray(array, element){
  return([...array, element ]);
}

function accessElementInArray(array, index){
  console.log(array[index]);
  return(array[index]);
}  

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return(array);
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return(array);
}

function removeElementFromBeginningOfArray(array){
//  array.shift(1);
  return array.slice(1);  // non-destructive
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
