var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];  //Creating an array

/* Adding an element at the beginning without changing the array */
var gameConsoles = ["X Box","Nintendo","PC"];
var newElement = "Atari";
function addElementToBeginningOfArray(gameConsoles,newElement) {
  let newArray = [newElement, ...gameConsoles];
  return newArray;
}

/* Adding an element at the beginning Destructively */
var destructiveBeginningElement = "Sega Genesis";
function destructivelyAddElementToBeginningOfArray (gameConsoles, destructiveBeginningElement) {
  gameConsoles.unshift(destructiveBeginningElement);
  return gameConsoles;
}

/* Adding an element at the ending without changing the array */
var endingElement = "NTD 360";
function addElementToEndOfArray(gameConsoles,endingElement) {
  let endingArray = [...gameConsoles, endingElement];
  return endingArray;
}

/* Adding an element at the ending Destructively */
var destructiveEndingElement = "NTD 370";
function destructivelyAddElementToEndOfArray (gameConsoles, destructiveEndingElement) {
  gameConsoles.push(destructiveEndingElement);
  return gameConsoles;
}

/* Accessing an Element using function - array and index as argument */
desiredIndex = 0;
function accessElementInArray (gameConsoles, desiredIndex) {
  return gameConsoles[desiredIndex];
}
/* Remove element from beginning of array Destrutively */
function destructivelyRemoveElementFromBeginningOfArray(gameConsoles) {
  gameConsoles.shift();
  return gameConsoles;
}

/* Removing an element from the beginning without changing the array */
function removeElementFromBeginningOfArray (gameConsoles) {
  let cutArray = gameConsoles.slice(1);
  return cutArray;
}

/* Removing an element from the ending destructively */
function destructivelyRemoveElementFromEndOfArray (gameConsoles) {
  gameConsoles.pop();
  return gameConsoles;
}

/* Removing an element from the ending without changing array */
function removeElementFromEndOfArray (gameConsoles) {
  let cutTailArray = gameConsoles.slice(0, gameConsoles.length - 1);
  return cutTailArray;
}
