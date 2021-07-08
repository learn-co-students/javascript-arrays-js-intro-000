var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(thisArray, thisElement){
  return [thisElement, ...thisArray]; 
}

function destructivelyAddElementToBeginningOfArray(thisArray, thisElement){
  thisArray.unshift(thisElement);
  return thisArray;
}

function addElementToEndOfArray(thisArray, thisElement){
  return [...thisArray, thisElement];
}

function destructivelyAddElementToEndOfArray(thisArray, thisElement){
thisArray.push(thisElement);
return thisArray;
}

function accessElementInArray(thisArray, thisIndex){
  return thisArray[thisIndex] ;
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(thisArray){
    thisArray.shift();
    return thisArray;
  }
  
  function removeElementFromBeginningOfArray(thisArray){
    thisArray = thisArray.slice(1);
    return thisArray;
  }
  function destructivelyRemoveElementFromEndOfArray(thisArray){
    thisArray.pop();
    return thisArray;
  }
  function removeElementFromEndOfArray(thisArray){
    //var i = thisArray.length - 1;
   return thisArray.slice(0,thisArray.length - 1);
   //return thisArray;
  }