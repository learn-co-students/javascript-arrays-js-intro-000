var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array1,newValue) {
  return [newValue,...array1];
}

function destructivelyAddElementToBeginningOfArray(array1,newValue2){
  array1.unshift(newValue2);
  return array1;
}


function addElementToEndOfArray(array2,newValue3){
  return [...array2,newValue3];
}

function destructivelyAddElementToEndOfArray(array2,newValue4){
  array2.push(newValue4);
  return array2;
}

function accessElementInArray(array3,index){
  return array3[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array4){
  array4.shift();
  return array4;
}

function removeElementFromBeginningOfArray(array5){
  return array5 = array5.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(array6){
  array6.pop();
  return array6;
}

function removeElementFromEndOfArray(arry7){
  return arry7.slice(0, arry7.length -1);
}
