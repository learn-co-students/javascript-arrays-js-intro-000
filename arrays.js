var chocolateBars =["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray (array,element) { var newarray= [element,...array]; return newarray}
function destructivelyAddElementToBeginningOfArray (array, element) { array.unshift(element); return array}
function addElementToEndOfArray (array,element) {array=[...array,element];return array}
function destructivelyAddElementToEndOfArray (array,element) {array.push(element);return array}
function accessElementInArray (array,n) {return array[n]}
function removeElementFromBeginningOfArray (array) {array.shift();return array}
function removeElementFromEndOfArray (array) {array.pop(); return array}