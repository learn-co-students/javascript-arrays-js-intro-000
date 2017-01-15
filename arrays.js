var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

var destructivelyAddElementToBeginningOfArray = function (anArray, element)  {
anArray.unshift(element);
return anArray;
};

destructivelyAddElementToBeginningOfArray(cities, "Philly");

var addElementToBeginningOfArray = function (anArray, element)  {
var updatedArray = [element, ...anArray];
return updatedArray;
};

addElementToBeginningOfArray(cities, "Chicago");

var destructivelyAddElementToEndOfArray = function (anArray, element)  {
anArray.push(element);
return anArray;
};

destructivelyAddElementToEndOfArray(cities, "Boise");

var addElementToEndOfArray = function (anArray, element)  {
var updatedArray = [...anArray, element];
return updatedArray;
};

addElementToEndOfArray (cities, "Phoenix");

var accessElementInArray = function (anArray, index) {
return anArray[index];
}; 

var destructivelyRemoveElementFromBeginningOfArray = function (anArray)  {
anArray.shift();
return anArray;
};

var removeElementFromBeginningOfArray = function (anArray) {
anArray.slice(1);
return anArray;
};

var destructivelyRemoveElementFromEndOfArray = function (anArray) {
anArray.pop();
return anArray;
};

var removeElementFromEndOfArray = function (anArray) {
anArray.slice(0, anArray.length - 1)
return anArray;
};



