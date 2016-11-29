var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(x,y){
  const array2 = [y, ...x]
  return array2;
}

function destructivelyAddElementToBeginningOfArray(x,y){
  x.unshift(y);
  return x;
}

function addElementToEndOfArray(x,y){
  const array2 = [...x,y];
  x.push(y);
  return array2;
}

function destructivelyAddElementToEndOfArray(x,y){
  x.push(y);
  return x;
}

function accessElementInArray(x,y){
  return x[y];
}

function destructivelyRemoveElementFromBeginningOfArray(x){
  return x.shift();
}

function removeElementFromBeginningOfArray(x){
  y = x.slice(1);
  return y;
}

function removeElementFromEndOfArray(x){
  return x.slice(0, x.length - 1);
}
