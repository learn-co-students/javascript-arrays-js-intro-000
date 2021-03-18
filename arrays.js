var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(i, k){
  var a = [...i];
  a.unshift(k);
  return a;
}

function destructivelyAddElementToBeginningOfArray(i, k){
  i.unshift(k);
  return i;
}

function addElementToEndOfArray(i,k){
  var a = [...i];
  a.push(k);
  return a;
}

function destructivelyAddElementToEndOfArray(i,k){
  i.push(k);
  return i;
}

function accessElementInArray(i,k){
  return i[k];
}

function destructivelyRemoveElementFromBeginningOfArray(i){
  i.shift();
  return i;
}
function removeElementFromBeginningOfArray(i){
  i = i.slice(1);
  return i;
}
function destructivelyRemoveElementFromEndOfArray(i){
  i.pop();
  return i;
}
function removeElementFromEndOfArray(i){
  var a = [...i];
  a.pop();
  return a;
}
