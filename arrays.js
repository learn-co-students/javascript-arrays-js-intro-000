var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array,num){
 newArr=  [num,...array];
 return newArr;
}
function destructivelyAddElementToBeginningOfArray(array,num){
  array.unshift(num);
  return array;
}

function addElementToEndOfArray(array,num){
 newArr=  [...array,num];
 return newArr;
}

function destructivelyAddElementToEndOfArray(array,num){
  array.push(num);
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

 function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array=  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array=array.slice(0,array.length-1);
  return array;
}
