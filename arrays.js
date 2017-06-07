var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, ab){
  chocolateBars = [ab, ...chocolateBars];
  //working
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, aa){
  chocolateBars.unshift(aa);
  //working
}

function addElementToEndOfArray (chocolateBars, b){
  [chocolateBars, ...b];
  //working
}

function destructivelyAddElementToEndOfArray(chocolateBars, a4){
  chocolateBars.push(a4);
  //working
}

/*function accessElementInArray(chocolateBars, b1){
  var key = Object.key[b1];
  console.log(chocolateBars[key]);
  //not working
}*/

function destructivelyRemoveElementFromBeginningOfArray(arrays){
  arrays.shift();
  //not working
  arrays;
}

/*function removeElementFromBeginningOfArray(chocolateBars, g){
  chocolateBars.slice(g);
  //not working
}*/

/*function destructivelyRemoveElementFromEndOfArray(chocolateBars, h){
  chocolateBars.pop();
  //not working
}*/

/*function removeElementFromEndOfArray(chocolateBars, i){
  chocolateBars.slice(0, chocolateBars.length-1);
  //not working
}*/
