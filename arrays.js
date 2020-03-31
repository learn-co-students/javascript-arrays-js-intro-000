var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, 1){
  chocolateBars.unshift(1);
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(fo){
  chocolateBars.unshift(fo);
  return chocolateBars;
}

function addElementToEndOfArray(ab){
  chocolateBars.push(ab);
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(bc){
  chocolateBars.push(bc);
  return chocolateBars;
}


word=['a', 'b', 'c','d'];
function accessElementInArray(){
  return word[1];
}





function destructivelyRemoveElementFromBeginningOfArray(){
  word.shift()
  return word;
}




function removeElementFromBeginningOfArray(){
  word.slice(1);
  return word;
}



function destructivelyRemoveElementFromEndOfArray(){
  word.pop();
  return word;
}


function removeElementFromEndOfArray(){
  word.slice(-1);
  return word;
}
