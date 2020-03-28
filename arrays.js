var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, item){
  var newarray = [...a];
  newarray.unshift(item);
  return newarray;
}
function destructivelyAddElementToBeginningOfArray(b,c){

b.unshift(c);
  return b;
}

function addElementToEndOfArray(a,item){
  var newarray = [...a];
  newarray.push(item);
  return newarray;
}
  function destructivelyAddElementToEndOfArray(b,c){

    b.push(c);
      return b;

  }

function accessElementInArray(a,index){
return a[index];

}

function destructivelyRemoveElementFromBeginningOfArray(a){
a.shift();
return a;
}

function removeElementFromBeginningOfArray(e){
var b=e.slice(1);
return b;
}

function destructivelyRemoveElementFromEndOfArray(e){
 e.pop();
  return e;
}

function removeElementFromEndOfArray(e){
  var v=e.slice(0,e.length-1);
   return v;

}
