var chocolateBars= ["snicker", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars,n) {return [n,...chocolateBars]};
function descructivelyAddElementToBeginningOfArray(chocolateBars,n) {chocolateBars.unshift(n); return chocolateBars};
function addElementToEndOfArray(chocolateBars,n){return [...chocolateBars,n]};
function destructivelyAddElementToEndOfArray(chocolateBars,n) {chocolateBars.push(n); return chocolateBars}
function accessElementInArray(chocolateBars, n){return chocolateBars[n]};
function removeElementFromBeginningOfArray(chocolateBars){return chocolateBars.slice(1)};
function removeElementFromEndOfArray(chocolateBars){return chocolateBars.slice(0, chocolateBars.length-1)};
