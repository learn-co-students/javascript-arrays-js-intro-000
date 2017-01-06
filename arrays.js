var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(x, y){
  var array = x;
  array = [y, ...x];
  return array;
}

function destructivelyAddElementToBeginningOfArray(x, y){
  var array = x;
  array.unshift(y);
  return array;
}

function addElementToEndOfArray(x, y){
  var array = x;
  array = [...x, y];
  return array;
}

function destructivelyAddElementToEndOfArray(x, y){
  var array = x;
  array.push(y);
  return array;
}

function accessElementInArray(x,y){
  var x = [1,2,3];
  return x[y];
  }

function destructivelyRemoveElementFromBeginningOfArray(x){
  var x = [1,2,3];
  x.shift();
  return x;
}

function removeElementFromBeginningOfArray(x){
  var x = [1,2,3];
  x = x.slice(1);
  return x;
}

function DestructivelyremoveElementFromEndOfArray(x){
  var x = [1,2,3];
  x.pop();
  return x;
}

function removeElementFromEndOfArray(x){
  x = [1,2,3];
  x = x.slice(0, x.length -1);
  return x;
}
