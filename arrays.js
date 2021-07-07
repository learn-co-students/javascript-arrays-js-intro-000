var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(chocolateBars,you){
  return [you, ...chocolateBars]
}
//
function destructivelyAddElementToBeginningOfArray(chocolateBars,you){
  chocolateBars.unshift(you)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars,you){
  return [...chocolateBars, you]
  }//


function destructivelyAddElementToEndOfArray(chocolateBars,you){
  chocolateBars.push(you)
  return chocolateBars
}


word=['a', 'b', 'c','d'];
function accessElementInArray(word,a){
  return word[a];
}





function destructivelyRemoveElementFromBeginningOfArray(word){
  word.shift()
  return word
}




function removeElementFromBeginningOfArray(word){
  return word.slice(1);
}



function destructivelyRemoveElementFromEndOfArray(word){
  word.pop()
  return word
}


function removeElementFromEndOfArray(word){
  return word.slice(0, word.length-1)
}
