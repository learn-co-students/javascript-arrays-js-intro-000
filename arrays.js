var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
newArray = [element, ...array];
return newArray}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array}

function accessElementInArray(array, index){
return array[index]}

function removeElementFromBeginningOfArray(array){
nuArray = array.slice(1);
return nuArray}

function removeElementFromEndOfArray(array){
coolArray = array.slice(0, array.length - 1);
return coolArray}

function addElementToEndOfArray(array, element) {
newArray = [...array, element];
return newArray}

function destructivelyAddElementToEndOfArray(array, element){
array.push(element);
return array}

function destructivelyRemoveElementFromEndOfArray(array){
array.pop();
return array}
