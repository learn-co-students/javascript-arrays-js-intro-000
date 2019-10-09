var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var smartphones = ["iPhone X", "SamsungGalaxy S4"];
var newElement = "Nokia Jailbreak";
function addElementToBeginningOfArray(smartphones,newElement) {
  newArray = [newArray, ...smartphones];
  return newArray;
}

 var gameConsoles = ["X Box","Nintendo","PC"];
 var destructiveElement = "Sega Genesis";
 function destructivelyAddElementToBeginningOfArray (gameConsoles, destructivelyAddElementToBeginningOfArray) {
   gameConsoles.unshift(destructiveElement);
   return gameConsoles;
 }