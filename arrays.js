var chocolateBars =["snickers","hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray=(arr,el)=>{return [el,...arr]};
var destructivelyAddElementToBeginningOfArray =(arr,el) =>{  arr.unshift(el); return arr;};
var addElementToEndOfArray =(arr,el) => {return[...arr,el]};
var destructivelyAddElementToEndOfArray  =(arr,el) =>{  arr.push(el); return arr;};
var accessElementInArray =(arr,index)=>arr[index];
var destructivelyRemoveElementFromBeginningOfArray =(arr,el) =>{  arr.shift(el); return arr;};
var removeElementFromBeginningOfArray =(arr,el) => {return arr.slice(1)}
var destructivelyRemoveElementFromEndOfArray =(arr,el) =>{  arr.pop(el); return arr;};
var removeElementFromEndOfArray =(arr,el) => {return arr.slice(0,-1)}
