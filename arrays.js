
 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// x = ["b","c","d","e"];
function addElementToBeginningOfArray(x,a) {
  var bleh = x.unshift(a);
  return(bleh);  
}

//y=["o","p","q","r"]
function(y,d) {
  var meh = y.slice(0,0,d);
    return (meh);
  
}

function accessElementInArray(v,n) {
  return v[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return v.shift();
}

function removeElementFromBeginningOfArray(arr2) {
  return arr2.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr3) {
  return arr3.pop();
}

function removeElementFromEndOfArray(arr4) {
  return arr4.slice(0, arr4.length -1);
}

done();