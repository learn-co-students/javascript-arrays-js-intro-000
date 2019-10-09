var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];  //Creating an array

var gameConsoles = ["X Box","Nintendo","PC"];
var newElement = "Atari";
/* Adding an element at the beginning without changing the array */
function addElementToBeginningOfArray(gameConsoles,newElement) {
  let newArray = [newElement, ...gameConsoles];
  return newArray;
}

var destructiveBeginningElement = "Sega Genesis";
/* Adding an element at the beginning Destructively */
function destructivelyAddElementToBeginningOfArray (gameConsoles, destructiveBeginningElement) {
  gameConsoles.unshift(destructiveBeginningElement);
  return gameConsoles;
}

var endingElement = "NTD 360";
/* Adding an element at the ending without changing the array */
function addElementToEndOfArray(gameConsoles,endingElement) {
  let endingArray = [...gameConsoles, endingElement];
  return endingArray;
}