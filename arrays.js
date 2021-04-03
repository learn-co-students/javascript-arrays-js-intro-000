var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = (array, unshiftValue) =>
    {
      return [unshiftValue,...array];
    }
var destructivelyAddElementToBeginningOfArray = (array, unshiftValue) =>
    {
      array.unshift(unshiftValue);
      return array;
    }
var addElementToEndOfArray = (array, pushValue) =>
    {
      return [...array,pushValue];
    }
var destructivelyAddElementToEndOfArray = (array, pushValue) =>
    {
      array.push(pushValue);
      return array;
    }
var accessElementInArray = (array,index) =>
    {
      return array[index];
    }
var destructivelyRemoveElementFromBeginningOfArray = array =>
    {
      array.shift();
      return array;
    }
var removeElementFromBeginningOfArray = array =>
    {
      return array.slice(1);
    }
var destructivelyRemoveElementFromEndOfArray = array =>
    {
      array.pop();
      return array;
    }
var removeElementFromEndOfArray = array =>
    {
      return array.slice(0, array.length - 1);
    }
var removeFromMiddleOfAnArray = (array, indexToRemove) =>
    {
      return [...array.slice(0,index-1),...array.slice(index+1 , array.length)];
    }
var DestructivelyRemoveFromMiddleOfAnArray = (array, indexToRemove) =>
    {
      array.splice(indexToRemove, 1);
      return array;
    }
