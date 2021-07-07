var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
//skittles are not chocolate

function addElementToBeginningOfArray(anar,anel) {
  return([anel,...anar]);
}

function destructivelyAddElementToBeginningOfArray(anar,anel) {
  anar.unshift(anel);
  return(anar);
}

function addElementToEndOfArray(anar,anel) {
  return([...anar,anel]);
}

function destructivelyAddElementToEndOfArray(anar, anel) {
  anar.push(anel)
  return(anar);
}


function accessElementInArray(anarr,ind) {
  return(anarr[ind]);
}

function destructivelyRemoveElementFromBeginningOfArray(anotherarr) {
  anotherarr.shift()
  return(anotherarr);
}

function removeElementFromBeginningOfArray(somearr) {
  return(somearr.slice(1));
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return(arr);
}

function removeElementFromEndOfArray(th) {
  return(th.slice(0,th.length-1));
}
