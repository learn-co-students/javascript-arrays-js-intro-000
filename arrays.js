var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(colors, favcolor) {
colors.unshift(favcolor);
	return colors;
}

function destructivelyAddElementToBeginningOfArray(colors, favcolor) {
colors.unshift(favcolor);
	return colors;
}

function addElementToEndOfArray(colors, favcolor) {
colors.push(favcolor);
	return colors;
}

function destructivelyAddElementToEndOfArray(colors, favcolor) {
colors.push(favcolor);
	return colors;
}

function accessElementInArray(colors, index){

  return colors[index];
}

function destructivelyRemoveElementFromBeginningOfArray(colors) {
  colors.shift();
  return colors;
}
function removeElementFromBeginningOfArray(colors) {
  colors.shift();
  colors.slice(1)
  return colors;
}

function destructivelyRemoveElementFromEndOfArray(colors) {
  colors.pop();

  return colors;
}

function removeElementFromEndOfArray(colors) {
  colors.pop();
  colors.slice(0, colors - 1)
  return colors;
}
