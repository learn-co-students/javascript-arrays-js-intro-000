var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (a,b){
  var temp = [b,...a];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(arr,b2){
  arr.unshift(b2);
  return arr;

}
function addElementToEndOfArray (a,b){
  var temp = [...a,b];
  return temp;
}
function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a;
}

function accessElementInArray(a,i){
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}
function removeElementFromBeginningOfArray(a){
  var temp = a.slice(1);
  return temp;
}
function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a){
  var temp = a.slice(0 , - 1);
  return temp;
}
